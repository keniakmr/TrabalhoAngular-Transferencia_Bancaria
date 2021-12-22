import { Contas, ContasService } from './../../servicos/tarefa.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  contas:Contas={
      id_transferencia:'',
      nomeCliente:'',
      valor: 0,
      contaCliente:''
  }

    constructor(private ContasService:ContasService,
    private router:Router,
    private activatedRoute: ActivatedRoute) {
     }

  ngOnInit(): void {
    // snapshop passa o parametro da rota ativa
    const id_entrada = <any>this.activatedRoute.snapshot.params['id']
    // busca pelo id da rota que foi recebido e vai no banco buscar
    console.log("id de entrada:" + id_entrada)
    this.ContasService.getUmaConta(id_entrada).subscribe({
        next: (resultado) => {console.log(resultado)
          //atribuindo para o objeto contas que está acima o subscribe
                            this.contas = resultado},
// se der erro imprime
        error: (erro) => console.error(erro),
        complete:() => console.info('achou a conta')

    })
  }

  modificar(){
    this.ContasService.editContas(this.contas.id_transferencia,this.contas).subscribe({
      next:(resultado)=> console.log("Ok - conta foi alterada"),
      error: (erro) => console.error(erro),
      complete: () => console.info("Ok- Alteração executada")
    })
    this.router.navigate(['/inicio'])

  }


  }
