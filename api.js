//JSON - JavaScript Object Notation (Notação de Objetos em JavaScript)

import express from "express";

const app = express();
const PORT = 3000;
const arrResponse = [
    {name: "Murilo", company: "Hashtag Programação"},
    {name: "Gael", company: "Hashtag Treinamentos"},
];

app.get("/", (req, res) => {
    res.json(arrResponse);
});

app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`)
});

