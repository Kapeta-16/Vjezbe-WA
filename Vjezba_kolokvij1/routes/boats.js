import express from 'express';
const router = express.Router();
import { boats } from '../data/boats.js'

router.get("/", (req, res) => {
    if(!boats){
        return res.status(404).json({greska: "Nema brodova"})
    }else{
        return  res.status(200).json(boats)
    }
})

router.get("/:naziv", (req, res) => {
    const naziv_broda = req.params.naziv;

    const brod = boats.find(boat => boat.naziv.toLowerCase() == naziv_broda.toLowerCase());

     if(!brod){
        return res.status(404).json({greska: `Nema broda ${naziv_broda}`});
    }else{
        return  res.status(200).json(brod);
    }
})

router.post("/", (req, res) => {
    let novi_brod = req.body;
    let naziv_broda = req.body.naziv;

    let brod_postoji = boats.find(brod => brod.naziv == naziv_broda)
    if(brod_postoji){
        return res.status(400).json({greska: "brod sa tim nazivom vec postoji"})
    }

    let novi_id = boats.length + 1;

    boats.push({id: novi_id, ...novi_brod});
    return res.status(200).json(boats);

    //ili let novi_bord = {id: novi_id ...}
})

export default router