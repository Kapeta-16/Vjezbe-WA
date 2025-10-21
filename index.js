const express =  require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, error => {
    if (error) {
        console.error('Ne mogu startati... neda mi se...');
    } else {
        console.log('Express.js posluzitelj slusa na pprtu ${PORT}')
    }
});