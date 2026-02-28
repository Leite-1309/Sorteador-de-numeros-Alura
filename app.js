function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById(`quantidade`).value);
    let limiteMin = parseInt(document.getElementById(`de`).value);
    let limiteMax = parseInt(document.getElementById(`ate`).value);

    if (limiteMin > limiteMax) {
        alert('O campo "do número" não pode ser maior do que o campo "até o número", escolha outros números');
        reiniciarDeEAte();
        return;
    }
    
    if (quantidadeDeNumeros > (limiteMax - limiteMin + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
       numero = gerarNumeroAleatorio(limiteMin, limiteMax); 
       
    while (sorteados.includes(numero)) {
        numero = gerarNumeroAleatorio(limiteMin, limiteMax);    
    }

        sorteados.push(numero); 
    }

    sorteadosNaTela = document.getElementById("resultado");
    sorteadosNaTela.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotao();
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");  
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}

function reiniciarDeEAte() {
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}
