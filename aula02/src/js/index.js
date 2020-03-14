import LojaView from "./view/LojaView";

let view = new LojaView();

//O evento onload é invocado automaticamente quando a página é carregada
window.onload = () => view.renderizarTabelaClientes();