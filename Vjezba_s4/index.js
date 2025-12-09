import express from 'express';
import fs from 'fs';

const app = express();

fs.readFile("./data/loremIpsum.txt", "utf-8", (err, data) => {
  if (err) {
    // ako se dogodila greška
    console.error('Greška prilikom čitanja datoteke:', err); // ispisuje grešku
    return;
    }
    console.log('Sadržaj datoteke:', data); // ispisuje sadržaj datoteke
});

app.get('/', (req, res) => {
    res.status(200).send('Vrijeme je za čitanje datoteka!');
});

app.listen(3000, () => {
    console.log('Poslužitelj je pokrenut na portu 3000');
});