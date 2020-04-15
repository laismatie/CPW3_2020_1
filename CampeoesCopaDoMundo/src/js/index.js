import CampeoesView from "./view/CampeoesView";

let view = new CampeoesView();

//O evento onload é invocado automaticamente quando a página é carregada
window.onload = () => {
    view.renderizarTabelaCampeoes();
    view.renderizarCardsCampeoes();
}