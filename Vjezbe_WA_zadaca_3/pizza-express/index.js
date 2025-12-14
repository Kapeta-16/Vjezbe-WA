import express from 'express';
import cors from 'cors';
import narudbeRouter from './routes/narudbe.js';
import pizzeRouter from './routes/pizze.js';

const corsOptions = {
    origin: 'http://localhost:5173'
};


const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors(corsOptions));
app.use('/pizze', pizzeRouter);
app.use('/narudbe', narudbeRouter);



app.get('/', (req, res) => {
    res.send('Dobrodošli u Pizza Express poslužitelj!');
});

app.listen(PORT, () => {
    console.log(`Pizza poslužitelj sluša na portu ${PORT}`);

});