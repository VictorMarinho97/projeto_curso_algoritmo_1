var sairLoop, valorUm, valorDois

function acaoBotao(){

do{
valorUm = prompt("Digite o primeiro número: ")
valorDois = prompt("Digite o segundo número: ")
document.getElementById("paragrafo").innerText = "Somando os dois: " + (parseInt(valorUm) + parseInt(valorDois))
sairLoop = prompt("Deseja sair do programa? S/N?")
}while(sairLoop == "N")
    
}