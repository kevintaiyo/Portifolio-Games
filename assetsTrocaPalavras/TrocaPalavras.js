
function trocar(){
    var newword = document.getElementById("palavra").value;

    if(document.getElementById("palavra").value == ""){ //usuario tem que digitar alguma palavra para jogar este jogo
        alert("Por favor, insira uma palavra na caixa para jogar");
        location.reload(); //Fazer reload na pagina, para prencher os nomes com as palavras originais novamente
    }

    document.getElementById("filme1").innerHTML = newword;
    document.getElementById("filme2").innerHTML = newword;
    document.getElementById("filme3").innerHTML = newword;
    document.getElementById("filme4").innerHTML = newword;
    document.getElementById("filme5").innerHTML = newword;
}

