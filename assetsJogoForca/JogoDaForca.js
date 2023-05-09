var sPerguntas = [["CARAMBOLA", "FRUTA"], ["JAMBO", "FRUTA"], ["PITOMBA", "FRUTA"], ["HOLAMBRA", "CIDADE"], ["HORTOLÂNDIA", "CIDADE"], ["ALICATE", "FERRAMENTA"], ["SETTA TICO-TICO", "FERRAMENTA"], ["CHAVE DE FENDA", "FERRAMENTA"], ["JORNAL", "OBJETO"], ["PALITO DE DENTE", "OBJETO"], ["STROGONOFF", "COMIDA"], ["MACARRONADA", "COMIDA"], ["SANTANA", "CARRO"], ["RENEGADE", "CARRO"], ["ROSA", "FLOR"], ["LÍRIO", "FLOR"], ["VIOLÃO", "INSTRUMENTO MUSICAL"], ["SAXOFONE", "INSTRUMENTO MUSICAL"], ["CONTRABAIXO", "INSTRUMENTO MUSICAL"], ["JOHNNY DEPP", "ATOR"], ["WILL SMITH", "ATOR"], ["ANYA TAYLOR-JOY", "ATRIZ"], ["SCARLETT JOHANSSON", "ATRIZ"], ["BATMAN", "PERSONAGENS"], ["CAPITÃO AMÉRICA", "PERSONAGEM"], ["CORINGA", "PERSONAGEM"], ["PENELOPE CHARMOSA", "PERSONAGEM"], ["MINECRAFT", "JOGOS"], ["THE LAST OF US", "JOGOS"]]

//Matriz para o shuffle
var iSorteados = [];
//Quantidade de jogadas feitas para buscar no vetor de Sorteados
var iJogada = 0;
//Armazrna a palavra da vez
var sPalavraSorteada;
//Conta as letras certas
var iAcertos = 0;
//Conta as Letras erradas
var iErro = 0;
//Guarda a letra clicada para poder desabilitá-la
var cLetraClicada = "";

//Vetor com as letras do teclado para facilitar a busca do ID
var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
//Váriaveis que contam os acertos e erros
var iCertas = 0, iErradas = 0;

//Função que cria os espaços da letra
function criaLetras(sPalavra) {
    //Busca o formulário
    var formula = document.getElementById("tenta");
    var j = 0;
    console.log("Palavra: " + sPalavra);
    //Tamanho da palavra
    for (var i = 0; i < sPalavra.length; i++) {
        //Se for diferente de espaço (32)
        if (sPalavra[i].charCodeAt(0) != 32) {
            //Cria um input
            var letra = document.createElement("input");
            //Define os atributos para o input
            //Tipo
            letra.setAttribute("type", "text");
            letra.setAttribute("name", "tenta" + j);
            letra.setAttribute("id", "tenta" + j);
            letra.setAttribute("maxlength", 1);
            letra.setAttribute("size", 1);
            letra.setAttribute("disabled", "true");
            //Adiciona o input no Formulário
            formula.appendChild(letra);
            j++;
        } else {
            //Quando for espaço, ele separa 20px a esquerda e 1px a direita do input anterior
            document.getElementById("tenta" + (j - 1)).style.margin = "0px 20px 0px 1px";
        }
    }
    //Remove todos os espaços e acentos
    sPalavraSorteada = limpa(sPalavra);
    //Exibe o tema e a quantidade de letras
    document.getElementById("tema").innerHTML = sPerguntas[iSorteados[iJogada]][1] + " - " + sPalavraSorteada.length + " letras";
}

function sorteia() {
    //Insere os números dentro do vetor conforme a quantidade de itens da matriz
    for (var m = 0; m < sPerguntas.length; m++) {
        iSorteados.push(m);
    }
    //Faz a mistura
    iSorteados = shuffleArray(iSorteados);
    //Chama a função que separa as letras das palavras
    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}

//Função que confere a letra clicada

function Confere(cLetra) {
    //Atribui a letra a uma variável global
    cLetraClicada = cLetra;
    //Cria variável que definirá se a letra foi encontrada na palavra
    var lAchou = false;
    //Percorre as letras da palavra sorteada
    for (var i = 0; i < sPalavraSorteada.length; i++) {
        //Se a letra clicada, existir na palavra
        if(cLetra == sPalavraSorteada.charAt(i)){
            document.getElementById("tenta" + i).value = cLetra;
            //Conta acertos
            iAcertos++;
            //Exibe acertos
            document.getElementById("acerto").innerHTML = "Acertos: " + iAcertos;
            //Indica que achou a letra na palavra
            lAchou = true;
        }
    }
    //Se não achou a letra
    if (lAchou == false) {
        //Conta o erro
        iErro++;
        //Insere a imagem conforme a quantida de de erro
        document.getElementById("imagem").src = "imagens/forca" + (iErro + 1) + ".png";
    }
}

//Função que verifica se o jogo acabou
function acabou(){
    //Cria variável que indicará se o jogo acabou
    var lAcabou = false;
    //Se a quantidade de acertos for igual ao tamanho da palavra
    if(iAcertos == sPalavraSorteada.length){
        //O jogo acabou
        lAcabou = true;
        //Exibe mensagem
        alert("Parabéns, você conseguiu!");
        iCertas++;
        //Se a quantidade de letras erradas chegou a 6
    }else if(iErro == 6){
        //O jogo acabou
        lAcabou = true;
        //Exibe a mensagem
        alert("Enforcado!");
        iErradas++;
    }

    //Desabilita a letra clicada
    document.getElementById(cLetraClicada).disabled = true;
    //Se o jogo acabou
    if(lAcabou){
        //Remove todos os inputs
        for(var i = 0; i < sPalavraSorteada.length; i++){
            document.getElementById("tenta" + i).remove();
        }
        //Incrementa jogadas para ir para a próxima palavra
        iJogada++;
        //Exibe quantidade de palavras jogadas certas e erradas
        document.getElementById("palcerta").innerHTML = "Palavras certas: " + iCertas + "<br> Palavras erradas: " + iErradas;
        //Chama função que criará novo jogo;
        criaLetras(sPerguntas[iSorteados[iJogada]][0]);
        //Inicializa variáveis
        iAcertos = 0;
        iErro = 0;
        document.getElementById("acerto").innerHTML = "Acertos: " + iAcertos;
        //Volta imagem da forca
        document.getElementById("imagem").src = "imagens/forca" + (iErro + 1) + ".png";
        //Habilita todas as letras
        for(var i = 0; i < sLetras.length; i++){
            document.getElementById(sLetras[i]).disabled = false;
        }
    }
}

//Função que mistura os valores do Array
function shuffleArray(d){
    for(var c = d.length - 1; c > 0; c--){
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}

function limpa(sItem){
    var sResultado = sItem;
    //Retira todos os espaços
    sResultado = replaceAll(sResultado, " ", "");
    //Retira acentos e cedilhas. Parâmetro NFD, capaz de separar os acentos das letras. Método replace substitui todas as ocorrências de caracteres diacríticos, combinando-os na sequência Unicode
    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return sResultado;
}

//Função para substituir todas as ocorrências
function replaceAll(str, de, para){
    //Procura a ocorrência
    var pos = str.indexOf(de);
    //Se achou
    while(pos > -1){
        //Substitui
        str = str.replace(de, para);
        //E procura novamente a ocorrência
        pos = str.indexOf(de);
    }
    //Retorna a string sem acentos e espaços
    return (str);
}

function shake(e, oncomplete, distance, time){
    var time = 500;
    var distance = 5;

    var start = (new Date()).getTime();
    animate();

    function animate(){
        var now = (new Date()).getTime();
        var elapsed = now - start;
        var fraction = elapsed / time;
        if(fraction < 1){
            var x = distance * Math.sin(fraction * 4 * Math.PI);
            e.style.left = x + "px";

            setTimeout(animate, Math.min(25, time - elapsed));
        }else{
            if(oncomplete) oncomplete(e);
        }
    }
}

function shakeme(event1){
    shake(event1.target);
}

