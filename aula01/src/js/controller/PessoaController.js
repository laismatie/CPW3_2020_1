export default class PessoaController{

    calcularIMC(pessoa){
        //poderia ser let mas se o valor não vai variar, melhor criar uma constante
        const imc = pessoa.peso / Math.pow(pessoa.altura,2);//abreviação de power ou potencia
        return imc; //return e a conta
    }
}