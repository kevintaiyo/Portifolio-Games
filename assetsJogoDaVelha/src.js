//inicializa as casas com nove para sabermos que não foi clicada
var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];

//indica a vez do jogar -(1)xis (-1)bola
var vez = 1;

//conta quantos cliques foram dados durante o jogo
var contaclique = 0;

//placar
var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

//funcao que verifiac as jogadas
function verifica(casa) {
    //verifica se a casa não foi clicada
    if (casas[casa] == 9) {
        //modifica de 9 para o valor do jogador da vez
        casas[casa] = vez;
        //se o jogador da vez for 1 coloca o desenho do xis
        if (vez == 1) {
            document.getElementById("img" + casa).src = "img/X.png";
            //se o jogador da vez for - coloca a boliha
        } else {
            document.getElementById("img" + casa).src = "img/Bolinha.png";
        }

        //inverte o jogadr da vez
        vez *= -1;
        contaclique++;
        //confere se houve vencedor
        confere();

    }
}

function confere() {
    var i;

    //variável que marca se houve vencedor
    var lGanhou = false;
    //variável que marca se o jogo acabou (todas as casas clicadas)
    var lAcabou = true;

    //percorre todas as casas para verificar se ainda existe alguma não clicada
    for (i = 0; i < casas.length; i++) {
        if (casas[i] == 9) {
            //se houver sabemos que ainda não deu velha
            lAcabou = false;
        }
    }

    if (contaclique == 9) {
        lAcabou = true;
    }

    var soma = [];
    soma[0] = casas[0] + casas[1] + casas[2];
    soma[1] = casas[3] + casas[4] + casas[5];
    soma[2] = casas[6] + casas[7] + casas[8];
    soma[3] = casas[0] + casas[3] + casas[6];
    soma[4] = casas[1] + casas[4] + casas[7];
    soma[5] = casas[2] + casas[5] + casas[8];
    soma[6] = casas[0] + casas[4] + casas[8];
    soma[7] = casas[2] + casas[4] + casas[6];

    //ercorre todos os valores de soma
    for (i = 0; i < soma.length; i++) {
        console.log(  soma[i])
        if (soma[i] == -3) {
            //se houver sabemos que ainda não deu velha
            lGanhou = true;
            sResposta = "Bolinha ganhou";
            iPontosO++;
            document.getElementById("bola").innerHTML = "Pontos o: " + iPontosO;
            break;

        } else if (soma[i] == 3) {
            lGanhou = true;
            sResposta = "Xis ganhou";
            iPontosX++;
            document.getElementById("xis").innerHTML = "Pontos X: " + iPontosX;
            break;
        }
    }

    //se a bola e nem o xis ganharam mas o jgo acabou deu velha
    if (lGanhou == false && lAcabou == true) {
        sResposta = "deu velha";
        iPontosV++;
        document.getElementById("velha").innerHTML = "velha: " + iPontosV;
    }

    if (lGanhou || lAcabou) {
        for (i = 0; i < casas.length; i++) {
            document.getElementById("casa" + i).disable = true;
            casas[i] = 0;
        }
        //exibe o resultado
        document.getElementById("resposta").innerHTML = sResposta;
        document.getElementById("resposta").style.color = "#fff";
        document.getElementById("resposta").style.fontSize = "xx-large";

    }
}

function recomeca() {
    for (i = 0; i < casas.length; i++) {
        //não permite arrastar a imagens
        document.getElementById("img" + i).ondragstart = function () { return false; };

        //habilita as casas
        document.getElementById("casa" + i).disable = false;

        //remove as imagens
        document.getElementById("img" + i).src = "";

        //volta a configuração orignal
        document.getElementById("resposta").innerHTML = "Resultado";
        document.getElementById("resposta").style.color = "#fff";
        document.getElementById("resposta").style.fontSize = "arge";


        //restrura os 9 das casas
        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        contaclique = 0;
        vez = 1;
    }
}
