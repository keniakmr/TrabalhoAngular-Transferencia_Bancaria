const rotas = require('express').Router()
const conexao = require('./config/conexao')

//criacao de rotas para mostrar as informações no navegador
rotas.get('/',(req, res)=>{
    // criando um select por dentro e alimentando a variavel sql
    let sql = 'select * from tb_contas order by nomeCliente asc'
    //faz a conecção com a query que contem 
    conexao.query(sql,(erro,rows,fields)=>{
        //buscando as linhas(rows) e os campos(fields)
        if(erro) throw erro
        res.json(rows)
    })
})

// esta rota mostra uma conta especifica passada por um id
rotas.get('/:id',(req,res)=>{
    const {id} = req.params
    let sql = 'select * from tb_contas where id_transferencia = ?'
    conexao.query(sql, [id], (erro,rows,fields)=>{
        if (erro) throw erro
        // res.json(rows)
        res.json(rows[0])
    })
})
// deleta uma conta especifica passada por um id
rotas.delete('/:id',(req,res)=>{
    const {id} = req.params
    let sql = `delete from tb_contas where id_transferencia = '${id}'`
    conexao.query(sql,(erro,rows,fields)=>{
        if(erro)throw erro
        res.json({status:'conta excluida '})
    })
})
// insere atraves do sql e comando post uma nova conta, que é informada atraves do body ou seja
// é recebida dentrro do formulario
rotas.post('/',(req,res)=>{
    const {nomeCliente,valor,contaCliente} = req.body
    let sql = `insert into tb_contas(nomeCliente,valor,contaCliente) values
     ( '${nomeCliente}', '${valor}', '${contaCliente}')`
    conexao.query(sql,(erro,rows,fields)=>{
        if (erro) throw erro
// VERIFICAR DE ONDE ESTÁ SAINDO A VARIAVEL STATUS QUE ESTÁ NO OUTRO PROJETO
        res.json({status:"conta incluida com sucesso"})
    })

})

rotas.put('/:id',(req, res)=>{
    const {id} = req.params
    // pega a requisição do body e coloca dentro da variavel sql  juntamente com a sentença
    const {nomeCliente,valor,contaCliente} = req.body
    let sql = `update tb_contas set nomeCliente = '${nomeCliente}',
                                        valor = '${valor}',
                                        contaCliente = '${contaCliente}'
                                        where id_transferencia = '${id}'`

     conexao.query(sql,(erro,rows,fields)=>{
         if(erro) throw erro
         res.json({status: "Conta Atualizada com sucesso"})
                                        })
})
// torna publica todas as rotas criadas
module.exports = rotas
