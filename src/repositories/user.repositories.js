import db from '../config/database.js'

//criação  da tabela de usuários//
db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
    `);

//Função para criar usuários no banco de dados //
    function createUserRepository(newUser) {
         return new Promise ((res, rej) => {
            const {username, email, password, avatar} = newUser
            db.run(`
                INSERT INTO users (username, email, password, avatar)
                VALUES (?,?,?,?)
                `,
                [username, email, password, avatar],

                (err) => {
                    if (err) {
                        rej(err)
                    } else {
                        res({id: this.lastID, ...newUser})
                    }
                }
            );

         });
    }

    function findUSerByemailRepository(email) {
        return new Promise ((resolve, reject) => {
            db.get (`
                SELECT id, username, email, avatar FROM users
                WHERE email = ?
                `, [email], (err, row) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(row)
                    }
                });
        });
    }

    

    export default {  
        createUserRepository,
        findUSerByemailRepository
    }