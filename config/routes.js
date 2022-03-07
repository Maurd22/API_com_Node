const express = require("express")
const res = require("express/lib/response")
const routes = express.Router()

/*simulando uma banco de dados*/
let db = [
    {'1': { Nome: 'Cliente 1', Idade: '20'}},
    {'2': { Nome: 'Cliente 2', Idade: '20'}},
    {'3': { Nome: 'Cliente 3', Idade: '20'}}
]

routes.get('/', (req, res) => {
    return res.json(db)
})

/*simulando o método post testado com Postman */
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body) 
        return res.status(400).end()

    db.push(body)
    return res.json(body)
    

})

/*simulando o método delete testado com Postman */
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id]) {
            return item
        }
            
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes