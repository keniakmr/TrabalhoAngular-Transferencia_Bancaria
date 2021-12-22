require('./config/conexao')
const express = require('express')
const app = express()
const porta = 3000 

app.use(express.json())

const rotas = require('./rotas')
app.use('/contas',rotas)

app.listen(porta, ()=>{
    console.log('servidor está rodando na porta 3000')
})