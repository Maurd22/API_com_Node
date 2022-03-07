/*fazendo requisição dos framewors e bibliotecas*/
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

/*colocando as requisição em uso */
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors()) //o cors deveria receber o dominio porem iremos usar essa api em localhost
app.use(routes)



app.listen(21262, () => {
    console.log('Rodando')
})