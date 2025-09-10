let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

function clicaConsole(){
    console.log('O Botao foi clicado');
}

function clicaAlerta(){
    alert('Eu amo JS');
}

function cidadeBrasil(){
    let cidade = prompt('Fale uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}