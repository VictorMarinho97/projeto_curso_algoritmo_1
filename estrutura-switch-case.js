
function acaoBotao(){
    var valorUm, valorDois, resultado, operacao

valorUm = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite a operação, ex: +/ -, *, /")
valorDois = prompt("Digite o segundo valor: ")

switch (operacao){  
    case "+":
    resultado = parseInt(valorUm) + parseInt(valorDois)
    break;
    case "-":
    resultado = parseInt(valorUm) - parseInt(valorDois)
    case "*":
    resultado = parseInt(valorUm) * parseInt(valorDois)
    case "/":
    resultado = resultado = parseInt(valorUm) / parseInt(valorDois)


}

document.getElementById("paragrafo").innerText = resultado

}