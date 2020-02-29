import ValidacaoView from './view/ValidacaoView';

//instanciando um objeto 
let view = new ValidacaoView();

window.aoValidaCPF = () => {
    view.validaCPF(); //chamando a função validaCPF da view
}
window.aoValidaCNPJ = ()=> {
    view.validaCNPJ();//chamando a função validaCNPJ da view
}