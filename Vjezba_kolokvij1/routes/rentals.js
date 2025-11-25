import express from 'express'
import { rentals } from '../data/rentals,js'

const router = express.Router();

router.post("/", (req, res) => {
    const boat_id = req.body.boatId;

    let ako_postoji = boats.find(rental => boat.id == boat_id);
    if(ako_postoji){
        return res.status(400).json({greska:`Brod sa id ${brod_id} vec postoji`})
    }

    let rental_id = boats.length + 1;

    rentals.push({id: rental_id, ...req.body})

    return res.status(200).json(rentals)
})

router.post("/", (req, res) => {
    rental_podaci = req.body;
    const brod_id = req.body.brod;

    const brod_postoji = boats.find(boat => boat.id == brod_id)

    id(!brod_postoji){
        return res.status(404).json({greska:`brod ${boat_id} ne postoji`})
    }

    let novi_id = rentals.length + 1;
    let novi_rental = {
        id: novi_id,
        boatId: rental_podaci.boatId,
        customerName: rental_podaci.customerName,
        rentalStartDate: rental_podaci.rentalStartDate,
        rentalEndDate: rental_podaci.rentalEndDate,
        totalPrice: totalPrice
    }
    
    return res.status(201)
})

export default router;


