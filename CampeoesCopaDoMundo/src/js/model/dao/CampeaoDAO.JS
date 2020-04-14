import Campeao from '../entity/Campeao';
import * as db from '../../db/campeoes.json';
//acesso aos dados

//CRUD
//C - CREATE
//R - READ
//U - UPDATE
//D - DELETE

export default class CampeaoDAO{

    recuperarTodos(){
        let campeoes = db.times.map(campeao => new Campeao(
            campeao.nome,
            campeao.ano,
            campeao.nomeTecnico,
            campeao.timeDerrotado,
            campeao.final,
            campeao.sede,
        ));
        return campeoes;
    }
}