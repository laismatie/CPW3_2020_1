import LojaControler from '../controller/LojaController';

export default class LojaView{

    constructor(){
        this.lojaController = new LojaControler();
    }

    renderizarTabelaClientes(){
        let clientes = this.lojaController.recuperarClientes();

        let tabela = document.createElement('table');

        let cabecalho = this.criarCabecalhoTabelaClientes();

        let corpo = this.criarCorpoTabelaClientes(clientes);

        tabela.insertAdjacentHTML('beforeend', cabecalho);
        tabela.insertAdjacentHTML('beforeend', corpo);

        document.getElementById('visualizacaoClientes').innerHTML = tabela;
    }

    criarCabecalhoTabelaClientes(){
        let cabecalho = `
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Tel</th>
                    <th>End.</th>
                </tr>
            </thead>
        `;

        return cabecalho;
    }

    criarCorpoTabelaClientes(clientes){
        let corpo = '';

        clientes.forEach(cliente => {
            let clienteStr = `
                <tr>
                    <td>${cliente.nome}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.endereco}</td>
                </tr>
            `;

            corpo += clienteStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;
        return tbody;
    }
}