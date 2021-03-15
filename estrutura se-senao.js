
function acaoBotao(){
    var valorUm, valorDois, resultado, operacao

valorUm = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite a operação, ex: +/ -, *, /")
valorDois = prompt("Digite o segundo valor: ")

if (operacao == "+"){
    resultado = parseInt (valorUm) + parseInt(valorDois)
} else if (operacao == "-"){
    resultado = parseInt (valorUm) - parseInt(valorDois)
} else if (operacao == "*"){
    resultado = parseInt (valorUm) * parseInt(valorDois)
} else if (operacao == "/"){
    resultado = parseInt (valorUm) / parseInt(valorDois)
}

document.getElementById("paragrafo").innerText = resultado

}
