import Cliente from '../entity/Cliente';
import * as db from '../../db/loja.json';
//acesso aos dados

//CRUD
//C - CREATE
//R - READ
//U - UPDATE
//D - DELETE

export default class ClienteDAO{

    recuperarTodos(){
        let clientes = db.clientes.map(cliente => new Cliente(
            cliente.nome,
            cliente.cpf,
            cliente.endereco,
            cliente.telefone
        ));
        return clientes;
    }
}