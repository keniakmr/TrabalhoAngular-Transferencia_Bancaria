import { Component, OnInit } from '@angular/core';
import { Contas, ContasService} from 'src/app/servicos/tarefa.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  contas:Contas = {
    id_transferencia:'',
    valor:0,
    nomeCliente:'',
    contaCliente:''
  }

  constructor(private ContasService:ContasService, private router:Router) { }

  ngOnInit(): void {
  }

  criar(){
    //aqui deletamos o atributo id_transferencia, pois esse atributo é
    //criado de forma automatica
    delete this.contas.id_transferencia
    // insere nova conta no banco de dados
    this.ContasService.addContas(this.contas).subscribe({
      next: (resultado) => console.log("Conta cadastrada com excelência"),
      error:(erro) => console.error(erro),
      complete:() => console.info("Completado com sucesso")
    })
    // seta para a tabela de contas, no Componente Inicio
    this.router.navigate(['/inicio'])

}


}


