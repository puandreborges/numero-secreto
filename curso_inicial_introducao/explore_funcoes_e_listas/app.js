let listaNum = [];
let numSecreto = numAleatorio();
let tamLista = 10; 
let tentativas = 1;
let titulo = 'Jogo do número secreto'
let paragrafo = 'Escolha um número entre 1 e 10'
function nomeNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
}

function mensagemInicial(){
    nomeNaTela('h1',titulo);
    nomeNaTela('p',paragrafo);
}
mensagemInicial();

let palavraTentativa = tentativas > 1? 'tentativa': 'tentativas';
function verificarChute(){
    let chute = document.querySelector('input').value; // Tem que colocar a variável extraída dentro da função verificar chute
    if (chute>aleatorio) {
        nomeNaTela('p','O numero é menor');
        tentativas++;
        limpaCampo();
    } else if (chute<aleatorio) {
        nomeNaTela('p','O número é maior');
        tentativas++;
        limpaCampo();
    } else {
        nomeNaTela('h1','Você acertou!');
        nomeNaTela('p',`Você utilizou ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Aqui eu habilitei o botão "Novo Jogo" que estava disabilitado no site
    }
} 

function numAleatorio(){
    let aleatorio = parseInt(Math.random()*tamLista+1);
    if (listaNum.includes(aleatorio)){
        return numAleatorio();
    } else {
        listaNum.push(aleatorio);
        console.log(listaNum);
        return aleatorio;
    } 
}


function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    mensagemInicial();
    limpaCampo();
    tentativas = 1; 
    aleatorio = numAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled',true); // Estou habilitando o botão 
}