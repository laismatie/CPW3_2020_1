import PessoaView from './view/PessoaView';

let view = new PessoaView();

window.aoCalcularIMC = event => {
    event.preventDefault();
    view.calcularIMC();
}