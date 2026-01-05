import sqlite from "sqlite";

const db = new sqlite3.Database("library_db.sqlite", (err) =>{
    if (err) {
        console.log("Error ao Conectar ao banco de dados:", err.mesage)
    } else {
        console.log("Conectado ao banco de dados SQlite.")
    }
})

export default db;

