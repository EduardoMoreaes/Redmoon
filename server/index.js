const express = require("express");
const app = express();
const router = require('../routes/router')
const path = require("path");

app.use(express.static(path.join(__dirname, "../src/pages/home/public")));

app.get("/", (req, res) => {
    res.send(router)
});


app.listen(8080, () =>   {
    console.log("Aplicativo rodando na porta 8080: http://localhost:8080")
})