const express = require("express");

let app = express();

app.use(express.json());
let databas = [];

app.get("/", (req, res) => {
    let { category, sort, search } = req.query
    let temp = databas

    if (search) {
        temp = temp.filter((ele) => ele.title == search)
    }

    if (category) {
        temp = databas.filter((ele) => ele.category == category)
    }

    if (sort == "lth") {
        temp.sort((a, b) => a.price - b.price)
    }
    else {
        temp.sort((a, b) => b.price - a.price)
    }

    res.send(temp)
})

// get method
app.get("/", (req, res) => {
    let { id } = req.params
    res.send(databas[id]);
});

// post method
app.post("/", (req, res) => {
    databas.push(req.body);

    res.send(databas);
});

// delete method
app.delete("/:id", (req, res) => {
    let { id } = req.params;
    databas.splice(id, 1);

    res.send(databas);
});

// patch method
app.patch("/:id", (req, res) => {
    let { id } = req.params;
    databas[id] = { ...databas[id], ...req.body };

    res.send(databas);
});

app.listen(8090, () => {
    console.log("server running up to 8090");
});
