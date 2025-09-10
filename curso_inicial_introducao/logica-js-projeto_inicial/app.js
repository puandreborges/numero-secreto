alert('Bem vindo ao jogo do número secreto'); // Comando para simplesmente aparecer um alerta ao abrir a página 
let numeroSecreto = parseInt(Math.random()*10+1) ;  // O "let" faz com que declaremos uma variável e será salva na memória
let chute; 
let tentativas = 1;
while (chute!=numeroSecreto){
    chute = Number(prompt('Digite um número de 1 a 100'));
    if (chute==numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert('O número digitado ainda é menor');
        } else {
            alert('O número digitado ainda é maior')
        } tentativas++;
    } 
}
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! O número é ${chute} e você teve ${tentativas} ${palavraTentativas}`)
