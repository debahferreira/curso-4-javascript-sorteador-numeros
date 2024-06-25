function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numerosGerados = [];
    let numero;

    if(quantidade > (ate - de + 1)) {
        alert('Por favor, indique uma quantidade de números menor ou igual ao intervalo escolhido.');
        return;
    }

    if(de < ate) {
        for (let i = 0; i < quantidade; i++) {
        numero = gerarNumerosAleatorios(de, ate);
        while(numerosGerados.includes(numero)) {
            numero = gerarNumerosAleatorios(de, ate);
        }
        numerosGerados.push(numero);
        }
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosGerados}.</label>`;

        alterarStatusDoBotao();
    } else {
        alert('Por favor, insira no terceiro campo um valor maior que o inserido no segundo campo.');
    }
}

function gerarNumerosAleatorios(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

function reiniciar() {
   alterarStatusDoBotao();
   document.getElementById('quantidade').value = '';
   document.getElementById('de').value = '';
   document.getElementById('ate').value = '';
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora.</label>`;
}

function alterarStatusDoBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}