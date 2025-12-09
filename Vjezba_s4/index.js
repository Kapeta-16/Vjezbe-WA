import express from 'express';
import fs from 'fs/promises';

const app = express();

function read_lorem(callback) {
    fs.readFile("./data/loremIpsum.txt", "utf-8", callback)
}

app.get('/lorem', (req, res) => {
        read_lorem ((err, data) => {
            if (err) {
                res.status(404).send("Greška u čitanju datoteke.")
            }
             return res.status(200).send(data);
     })
});

app.get('/lorempromise', (req, res) => {
        fs.readFile("./data/loremIpsum.txt", "utf-8")
        .then(data => {
            console.log("podaci:", data)
            res.status(200).send(data)
        })
        .catch(error => {
            console.log("greška:", error)
            res.status(400).send("Greška!")
        })
});


app.get('/lorem-promise', async (req, res) => {
    try{
        let data = await fs.readFile("./data/loremIpsum.txt", "utf-8")
        res.status(200).send(data)
    }catch(error) {
        res.status(400).send("Greška!")
    }
            
});

app.listen(3000, () => {
    console.log('Poslužitelj je pokrenut na portu 3000');
});