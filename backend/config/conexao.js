// criação de uma constante mysql para instanciar o pacote mysql
const mysql = require('mysql')
// criação de uma contante conexao contendo toda a configuração
// da conecção com o banco
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    port: 3306,
    database: 'db_contabancaria'
})
conexao.connect((erro)=>{
    if (erro) throw erro 
    console.log ("Conecção realizada com banco de dados Mysql")
})
//exportando a conecção com o banco
module.exports = conexao