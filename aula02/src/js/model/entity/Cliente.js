export default class Cliente{

    constructor(nome, cpf, endereco, telefone){
        Object.assign(this, {nome, cpf, endereco, telefone}); //ordem não é importante
        /**
         * this.nome = nome;
         * this.cpf = cpf;
         * this.endereco = endereco;
         * this.telefone = telefone;
         */
    }
}