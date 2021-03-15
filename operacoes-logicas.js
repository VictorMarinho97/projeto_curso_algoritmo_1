/*
passou: falso
  escreval("Digite o nome do aluno: ")
  leia(nome)
  escreval("Digite a primeira nota do aluno: ")
  leia(nota01)
  escreval("Digite a segunda nota do aluno: ")
  leia(nota02)
  media := (nota01 + nota02)/2
  escreval("Média do aluno: ", media)

  se media >= 50 entao
  passou := verdadeiro
  fimse
  
  se (passou) && (media >= 50 || media <= 70)
  escreval("Aprovado!", nome)
  senao
  escreval("Reprovado,", nome)
  fimse
  */

 var nome, nota01, nota02, passou;
 passou = false;
 nome = prompt("Digite o nome do aluno: ");
 nota01 = prompt("Digite a primeira nota: ");
 nota02 = prompt("Digite a segunda nota: ");
 
 media = (parseInt(nota01) + parseIntO(nota02)) / 2;
 
 if (media >=50)
     passou = true;


 if (passou && (media >= 70 && media <=90) )
     alert("Aprovado!" + nome);
else 
    alert("Reprovado!" + nome);
 }