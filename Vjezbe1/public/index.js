const express =  require('express');
const app = express();
const PORT = 3005;

let korsnici = [
    {id:1, ime:'Marko', prezime:'Maric'},
    {id:2, ime:'Ana', prezime:'Anic'},
    {id:3, ime:'Pero', prezime:'Peric'}
]


app.get('/', (req, res) => {
    console.log('pozvan je GET endpoint!');
    res.send({poruka: 'Pozdrav iz Expressa'});
})


app.get('/', (req, res) => {
    console.log('pozvan je GET endpoint!');
    res.sendFile(__dirname + '/public/index.html');
})


app.get('/about', (req, res) => {
    console.log('pozvan je GET endpoint!');
    res.sendFile(__dirname + '/public/about.html');
})


app.listen(PORT, error => {
    if (error) {
        console.error('Ne mogu startati... neda mi se...');
    } else {
        console.log(`Express.js posluzitelj slusa na portu ${PORT}`)
    }
});