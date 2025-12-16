import express from 'express'
import zaposleniciRouter from './routes/zaposlenici.js'


const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/zaposlenici", zaposleniciRouter)

app.use("/",  (req, res) => {
    res.send("Radi")
});

app.listen(PORT, (req, res) => {
    console.log(`Poslužitelj sluša na portu ${PORT}`)
});
