import ValidacaoController from '../controller/ValidacaoController';

export default class ValidacaoView{

    constructor(){
        //criando um controller 
        this.controller = new ValidacaoController();
        this.$ = document.querySelector.bind(document);
    }

    validaCPF(){
        let numero = this.$('#numero').value;

        let cpf = this.controller.validaCPF(numero);
        
        this.exibirValidacao(cpf);
    }

    validaCNPJ(){
        let numero = this.$('#numero').value;

        let cnpj = this.controller.validaCNPJ(numero);
        
        this.exibirValidacao(cnpj);
    }

    exibirValidacao(a){
        var resultado;
        if(a == true){
            resultado = 'Válido';
        }else{
            resultado = 'Inválido';
        }
      
        this.$('#resultado').innerText = resultado;
    }
}