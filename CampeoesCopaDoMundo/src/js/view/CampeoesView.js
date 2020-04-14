import CampeoesController from '../controller/CampeoesController';

export default class CampeoesView{

    constructor(){
        this.campeoesController = new CampeoesController();
    }

    renderizarTabelaCampeoes(){
        let campeoes = this.campeoesController.recuperarCampeoes();

       

        let cabecalho = this.criarCabecalhoTabelaCampeoes();

        let corpo = this.criarCorpoTabelaCampeoes(campeoes);

        let tabela  = `<table>${cabecalho}${corpo}</table>`

        document.getElementById('visualizacaoCampeoes').innerHTML = tabela;
    }

    criarCabecalhoTabelaCampeoes(){
        let cabecalho = `
            <thead>
                <tr>
                    <th>Campeão</th>
                    <th>Ano</th>
                    <th>Técnico</th>
                    <th>Vice</th>
                    <th>Final</th>
                    <th>Sede</th>
                </tr>
            </thead>
        `;

        return cabecalho;
    }

    criarCorpoTabelaCampeoes(campeoes){
        let corpo = '';

        campeoes.forEach(campeao => {
            let campeaoStr = `
                <tr>
                    <td>${campeao.nome}</td>
                    <td>${campeao.ano}</td>
                    <td>${campeao.nomeTecnico}</td>
                    <td>${campeao.timeDerrotado}</td>
                    <td>${campeao.final}</td>
                    <td>${campeao.sede}</td>
                </tr>
            `;

            corpo += campeaoStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;
        return tbody;
    }
}