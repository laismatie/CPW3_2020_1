import CampeaoDAO from '../model/dao/CampeaoDAO';

export default class CampeoesController{

    constructor(){
        this.campeaoDAO = new CampeaoDAO();
    }

    recuperarCampeoes(){
        return this.campeaoDAO.recuperarTodos();
    }


}