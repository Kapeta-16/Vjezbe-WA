import express from 'express';
import fs from "fs/promises";



const router = express.Router();

async function citanje_datoteke() {
    return await fs.readFile('./data/zaposlenici.json', 'utf-8')
}

function validatacija_podataka(z){
    if(!z.ime || typeof z.ime !== "string") {
        return "Ime je obavezno";
    }

    if(!z.prezime || typeof z.prezime !== "string") {
        return "Prezime je obavezno";
    }

    if(!z.email || !z.email.includes("@")) {
        return "Email nije ispravan";
    }

    if(typeof z.placa !== "number" || z.placa <= 0) {
        return "Placa mora biti pozitivna";
    }

    if(typeof z.godine_staza !== "number" || z.godine_staza < 0){
        return "Godine staža moraju biti 0 ili više";
    }

    return null;

}

//Dohvačanje svih zaposlenika
router.get("/", async (req, res) => {
    let filtriraj_po_poziciji = req.query.pozicija;
    let godine_staza_min = parseInt(req.query.godine_staza_min);
    let godine_staza_max = parseInt(req.query.godine_staza_max);
    let sort = req.query.sort;
    let smjer = req.query.smjer;


    function sortiraj(zaposlenici, polje, smjer_sortiranja){
            if(smjer_sortiranja === 'uzlazno') {
                zaposlenici.sort((a, b) => a[polje] - b[polje]);
            }else if(smjer_sortiranja === 'silazno'){
                zaposlenici.sort((a, b) => b[polje] - a[polje]);
            }
        }
    
    
    try{
        const data = await citanje_datoteke();
        let zaposlenici = JSON.parse(data);

        if(filtriraj_po_poziciji){
           zaposlenici = zaposlenici.filter(z => z.pozicija.toLowerCase() === filtriraj_po_poziciji.toLowerCase());
        }

        if(godine_staza_min > 0){
            zaposlenici = zaposlenici.filter(z => z.godine_staza >= godine_staza_min)
        }

        if(godine_staza_max){
            zaposlenici = zaposlenici.filter(z => z.godine_staza <= godine_staza_max)
        }

        sortiraj(zaposlenici, sort, smjer);

        res.status(200).json(zaposlenici);

    }catch(error){
        console.error('Greška prilikom čitanja datoteke:', error);
        res.status(500).send('Greška prilikom čitanja datoteke.');
    }
});

//Dohvačanje svih zaposlenika po id-u
router.get("/:id", (req, res) => {

    let id = parseInt(req.params.id);

    citanje_datoteke((err, data) => {
    if(err){
        return res.status(500).json({Greška: "Greška u čitanju datoteke"});
    }
        let newdata = JSON.parse(data);
        let zaposlenik = newdata.find(z => z.id === id);

        if(!zaposlenik){
            return res.status(404).json({ Greška: `Zaposlenik sa id: ${id} ne postoji`})

        }

        res.status(200).send(zaposlenik);
        
    })
});

router.post("/", (req, res) => {

    const greska = validatacija_podataka(req.body);

    if(greska){
        return res.status(400).json({Greška: greska})
    }

    citanje_datoteke((err, data) => {

    if(err){
        return res.status(500).json({Greška: "Greška u čitanju datoteke"})
    }
        const zaposlenici = JSON.parse(data);
        let novi_zaposlenik = req.body
        let novi_id = zaposlenici.length + 1;

        const novi = {
            id: novi_id,
            ...novi_zaposlenik
        }

        zaposlenici.push(novi)

            fs.writeFile('./data/zaposlenici.json', JSON.stringify(zaposlenici, null, 2), (err, data) => {
                if(err){
                    return res.status(500).json({Greška: "Greška tokom zapisivanja u datoteku"});
                }
             console.log('Podaci uspješno zapisani u datoteku.');
            res.status(201).json({ poruka: 'Podaci uspješno zapisani u datoteku.', novi});
        });
    });
});


export default router