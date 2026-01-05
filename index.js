
// Metodoos => GET, POST , PUT/PATCH, DELETE
// NAME => sempre no Plural
// Callback Functions => Onde executamos o backend (lógica regra de negócios)

import express from "express";
const app = express();

// middleware para ler JSON
app.use(express.json());

// "banco de dados" em memória
const users = [];

app.post('/users', (req, res) => {
    const body = req.body;
    users.push(body);
    res.status(201).send("Usuario Criado com Sucesso!")
});

app.get("/users", (req, res) => {
    res.send({users})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
