import express from 'express';
import path from 'path';


// export default
import boatRouter from "./routes/boats.js"

const app = express();
app.use(express.json());
app.use('/boats', boatRouter)
const PORT = 3000;
import rentals from './routs/rentals.js'

let relativna = path.join('public', 'index.html')
let apsolutna = path.resolve(relativna)


app.listen(PORT, error => {
    if(error){
        console.error("ne radi")
    }
    console.log("Radi")
})

app.get("/", (req, res) => {
    console.log('Pozvana GET / ruta')
    res.send('Pozdrav')
})


