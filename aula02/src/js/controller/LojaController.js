import ClienteDAO from '../model/dao/ClienteDAO';
//lógica de négocios = algoritmos

export default class LojaController{

    constructor(){
        //criando o clienteDAO como atributo da classe
        this.clienteDAO = new ClienteDAO();
    }

    recuperarClientes(){
        return this.clienteDAO.recuperarTodos();
    }


}