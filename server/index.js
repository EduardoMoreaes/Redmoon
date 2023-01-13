const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send('../views/index.html')
})


app.listen(8080, () =>   {
    console.log("Aplicativo rodando na porta 8080: http://localhost:8080")
})