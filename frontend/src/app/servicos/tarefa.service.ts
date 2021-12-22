import { Injectable } from '@angular/core';
// insere uma rotina de importação da biblioteca http para usar o serviço http
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Aqui atraves desta exportação todas as rotinas feitas no HttpBackend(post, put, get, delete)
// serão acessadas atraves desta rota, o caminho inteiro da url
// foi declarado no arquivo Proxy.conf.json
export class ContasService {

  url = '/contas'

// variavel private criada usada localmente
  constructor(private http:HttpClient) { }

// lista todas as tarefas que estão no BD
  getContas(){
// o this se refere ao objeto da classe,a url dentro da classe que está declarado acima
      return this.http.get(this.url)
  }
  //get para uma tarefa especifica somente para um id
  getUmaConta(id:any){
    return this.http.get(this.url + '/' + id)
  }

  addContas(contas:Contas){
    return this.http.post(this.url, contas)
  }

  deleteConta(id:any){
    return this.http.delete(this.url + '/' + id)
  }
  editContas(id:any,contas:Contas){
    return this.http.put(this.url + '/' + id, contas)
  }

}

export interface Contas{
    id_transferencia?:string
    valor?:number
    nomeCliente?:string
    contaCliente?:string
}
