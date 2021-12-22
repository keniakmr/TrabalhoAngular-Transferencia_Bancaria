// import { Contas } from 'src/app/servicos/tarefa.service';
import { Component, OnInit } from '@angular/core';
//importar as rotinas contidas no arquivo tarefaService
import { ContasService, Contas } from '../../servicos/tarefa.service';
import {Router} from '@angular/router';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

    ListarContas: Contas[]
//dentro do constructor foi declarada a variavel ContasService com o tipo TarefaService
    constructor(private ContasService:ContasService, private router:Router) {
         this.ListarContas = []
     }
//ao inicializar este componente executa a funcao ListarContas, esta
// dizendo que qdo tiver no inicio executa a função de ListarContas
     ngOnInit(): void {
       this.listarContas()
     }
// função para listagem das contas cadastradas no BD
     listarContas(){
       this.ContasService.getContas().subscribe({
          next: (resultado) => {console.log(resultado)
             this.ListarContas = <any>resultado},
          error: (erro) => console.error(erro),
          complete:() => console.info('complete')
           })
      }
 // função para excluir Contas
      excluir(id:any){
         this.ContasService.deleteConta(id).subscribe({
          next: (resultado) => {console.log("Conta excluída")
         this.listarContas()},
         error: (erro) => console.error(erro),
          complete: () => console.info("Exclusão completa concluída")
      })
      }
      editar(id:any){
         this.router.navigate(['/edit/' + id])
      }
}
