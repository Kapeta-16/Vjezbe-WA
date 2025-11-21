/*
import express from 'express';
let PORT = 3000;
let app = express();

app.use(express.json());

let pizze = [
    {id: 1, naziv: 'Margheritta', cijena: 9},
    {id: 2, naziv: 'Capricciosa', cijena: 12},
    {id: 3, naziv: 'Vegetariana', cijena: 18},
    {id: 4, naziv: 'Quatro formaggi', cijena: 15},
    {id: 5, naziv: 'Salami', cijena: 13},
]

app.get("/", (req, res) => {
    console.log('Pozvana GET / ruta')
    res.send('Pozdrav')
})


app.get("/pizze", (req, res) => {
    res.json(pizze)
})

app.get("/pizze/:naziv", (req, res) => {
    let naziv_pizze = req.params.naziv
    console.log('Trazim pizzu:', naziv_pizze)
    //-X GET http://localhost:3000/pizze/Vegetariana

    let trazena_pizza = pizze.find(pizza => {
        return naziv_pizze == pizza.naziv;
    })

    res.json(trazena_pizza)
})

app.post("/pizze", (req, res) => {
    let nova_pizza = req.body;
    console.log('Podaci', nova_pizza);
    pizze.push(nova_pizza);
    res.json(pizze);
})

app.delete("/pizze/:id", (req, res) => {
    let brisanje_id = parseInt(req.params.id);
    console.log("Brisanje pizze s ID-jem:", brisanje_id);
    pizze = pizze.filter(pizza => pizza.id !== brisanje_id);
    res.send('Endpoint radi...', pizze)
})

app.listen(PORT, error => {
    if (error) {
        console.error('Doslo je od greske u pokretanju ')

    }
    console.log(`Aplikacija slusa na portu ${PORT}`)
})
*/
import express from 'express';
import pizzeRouter from 'pizze.js';
const PORT = 3000;
let app = express();

app.use(express.json())


app.use('/pizze', pizzeRouter)



app.listen(PORT, error => {
    if (error) {
        console.error('Doslo je od greske u pokretanju ')

    }
    console.log(`Aplikacija slusa na portu ${PORT}`)
})