const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('get data in server');
});


let arr = []; 

app.use(express.json());
app.post('/', (req, res) => {
    arr.push(req.body); 
    res.send('post method');
});

app.listen(3000, () => {
    console.log("Server is running");
});

