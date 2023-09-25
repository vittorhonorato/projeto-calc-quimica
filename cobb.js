function calculaCobb()  {
    let pesoInicial = document.getElementById('peso1').value;
    let pesoFinal = document.getElementById('peso2').value;
    let resultado = ((pesoFinal - pesoInicial) * 100).toFixed(3);
    let respostaCobb = document.getElementById('respostaCobb')
    respostaCobb.innerHTML=`O valor do Cobb é ${resultado}`;
}

function calculaGramatura()  {
    let pesoGramatura = document.getElementById('pesoGramatura').value;
    let squad = document.getElementById('area').value;
    let resultadoG = ((pesoGramatura/squad) * 100);
    let respostaGramatura = document.getElementById('respostaGramatura')
    respostaGramatura.innerHTML=`O valor da Gramatura é ${resultadoG} g/m `;
}

function calculaUmidade()   {
    let umidade1 = document.getElementById('box1').value;
    let umidade2 = document.getElementById('box2').value;
    let umidadeRes = ((umidade1 - umidade2)/umidade1) * 100;
    let respostaUmidade = document.getElementById('umidade');
    respostaUmidade.innerHTML = `O valor da umidade é ${umidadeRes}%`;
}

function calculaAbs()   {
    let abs1 = document.getElementById('abs1').value;
    let abs2 = document.getElementById('abs2').value;
    let abs = ((abs2 - abs1)/ abs1) * 100;
    let respostaAbs = document.getElementById('respostaAbs');
    respostaAbs.innerHTML = `A absorção lateral é ${abs}%`;

}

function calculaSolido()    {
    let pesoPrato = document.getElementById('pesoprato').value;
    let pesoResina = document.getElementById('pesoresina').value;
    let pesoFinal = document.getElementById('pesofinal').value;
    let teorSolido = ((pesoFinal - pesoPrato)/pesoResina) * 100;
    let respostaSolido = document.getElementById('respostaSolido');
    respostaSolido.innerHTML = `O valor do teor de sólido encontrado é ${teorSolido}`;
}

function calculaDiluicao()  {
    let concentracaoInicial = document.getElementById("concent-base").value;
    let volumeBase = document.getElementById("volume-base").value;
    let concentracaoFinal = document.getElementById("concent-final").value;
    let volumeFinal = (concentracaoInicial * volumeBase) / concentracaoFinal;
    let respostaDilui = document.getElementById("respostaDilui");
    respostaDilui.textContent = (volumeFinal - volumeBase).toFixed(2) + " " + "litros.";
}

function calculaDiluicaoMistura() {
    let concentA = document.getElementById("concent-A").value;
    let volumeA = document.getElementById("volume-A").value;
    let concentB = document.getElementById("concent-B").value;
    let volumeB = document.getElementById("volume-B").value;
    let concentFinal = document.getElementById("concent-f").value;
    let volumeAcrescentado = ((concentA * volumeA) + (concentB * volumeB) - (volumeA * concentFinal + volumeB * concentFinal)) / concentFinal;
    let respostaAcresc = document.getElementById("respostaDiluiMistura");
    respostaAcresc.textContent = volumeAcrescentado.toFixed(2) + " " + "litros.";

}

