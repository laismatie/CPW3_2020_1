import Pessoa from '../model/Pessoa';
import PessoaController from '../controller/PessoaController';

export default class PessoaView{

    constructor(){
        this.controller = new PessoaController();

        /** Seletor de elementos da página  */
        this.$ = document.querySelector.bind(document);
    }

    calcularIMC(){
        /**
         * Pega os valores de peso e altura do formulário
         */

        let peso =  this.$('#peso').value;
        let altura = this.$('#altura').value;

        /**
         * Instancia (cria) o objeto de Pessoa
         */
        let pessoa = new Pessoa(peso,altura);

        /**Invoca o controller para calcular
         * o valor do IMC da pessoa
         */
        let imc = this.controller.calcularIMC(pessoa);

        //Invoca a função de exibição 
        this.exibirIMC(imc);
    }

    exibirIMC(imc){
        let resultado = `O seu IMC é de ${imc.toFixed(1)}`;
        this.$('#resultado').innerText = resultado;
    }
}