import express from 'express';
import { arrays_are_same } from '../helpers/index.js';
const router =  express.Router();


const pizze = [
    {id: 1, naziv: 'Margherita', cijena: 9},
    {id: 2, naziv: 'Capricciosa', cijena: 12},
    {id: 3, naziv: 'Vegetariana', cijena: 18},
    {id: 4, naziv: 'Quatro formaggi', cijena: 15},
    {id: 5, naziv: 'Salami', cijena: 13},
];

router.get('/', (req, res) => {
    res.json(pizze).status(200); // OK
});

router.get("/:naziv", (req, res) => {
    const naziv_pizza = req.params.naziv;

    const trazena_pizza = pizze.find(pizza => pizza.naziv == naziv_pizza);

    if (!trazena_pizza){
       return  res.json({greska: 'Pizza ne postoji'}).status(404);
    }
    return res.json(trazena_pizza).status(200);
});

router.post("/", (req, res) => {
    const nova_pizza = req.body;
    const naziv_nove_pizze = req.body.naziv;

    const dozoljeni_kljucevi = ["naziv", "cijena"];

    const nova_pizza_kljucevi = Object.keys(nova_pizza) // vraća array

    if(!arrays_are_same(nova_pizza_kljucevi, dozoljeni_kljucevi)) {
        return res.status(400).json("Greška kljucevi nisu ok")
    }


    let postoji = pizze.find(pizza => pizza.naziv == naziv_nove_pizze);

    if (postoji){
        res.json({"Greška": `Pizza s nazivom ${naziv_nove_pizze} vec postoji`}).status(400)
    }

    let novi_id = pizze.at(-1)['id'] + 1;
    
    let novi_zapis = {
        id: novi_id,
        naziv: nova_pizza.naziv,
        cijena: nova_pizza.cijena
    };


    pizze.push(novi_zapis);

    return res.json(pizze).status(201); // CREATED
});

router.delete('/:naziv', (req, res) => {
    const pizza_za_brisanje = req.params.naziv;
    if(isNaN(pizza_za_brisanje)) {
        return res.status(400).json({Greška: "Naziv nije string"})
    }

    let index_pizze =  pizze.findIndex(pizza => pizza.naziv == pizza_za_brisanje)

    if (index_pizze == -1) {
        return res.status(404).json({Greška: "Pizza ne postoji."});
    }

    let brisanje = pizze.splice(index_pizze, 1);

    return res.status(200).json({rezultat: brisanje});
});

router.put("/:naziv", (req, res) => {
    let trazena_pizza_naziv = req.params.naziv;
    let nova_pizza = req.body;

    let pizza_za_update = pizze.find(pizza => pizza.naziv == trazena_pizza_naziv)

    if(!pizza_za_update){
        return res.status(404).json({Greška: "Ne postoji"})
    }

    let pizza_update_index = pizze.findIndex(pizza => pizza.naziv == trazena_pizza_naziv)

    pizze.splice(pizza_update_index, 1, nova_pizza);

    return res.status(200);
})

router.patch('/:naziv', (req, res) => {
    let trazena_pizza_naziv = req.params.naziv;
    let update_pizze = ;
})
