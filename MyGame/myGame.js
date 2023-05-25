
var contarApple = 0; //CONTAR MAÇÃS COLETADAS
var tempo = setInterval(60000 - 60000);

function addApple(){
    //VARIAVEL PARA IMPRIMIR OS ELEMENTOS NA PAGINA HTML
    var apple = document.createElement('div');
    apple.setAttribute("class" , "apple");

    var p1 = Math.floor(Math.random() * 1800);
    var p2 = Math.floor(Math.random() * 900);

    apple.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px;");
    apple.setAttribute("onclick", "getApple(this)"); 
    document.body.appendChild(apple);
}

function getConta(){
    console.log("Maçãs coletadas" + contarApple);
    var pontuacao = document.getElementById('pontuacao'); ////CONTINUAR CODIGO A PARTIR DAQ
    pontuacao.textContent = "Maças coletadas: " + contarApple; //PARA MOSTRAR A PONTUAÇÃO DO JOGADOR AO LONGO DO JOGO
}

function getApple(el){
    document.body.removeChild(el);
    contarApple++;
    getConta(); //CHAMANDO A FUNÇÃO
    
    //CONDIÇÃO PARA FAZER A VELOCIDADE AUMENTAR DE ACORDO COM O NUMERO DE MAÇAS COLETADAS
    if(contarApple == 10){
        setInterval(addApple, 760);
    }else if(contarApple == 30){
        setInterval(addApple, 745)
    }else{

    }
}

//FUNÇÃO PARA FAZER O FUNCIONAMENTO DO JOGO QUANDO APERTAR O BOÃO START
function start(){
    setInterval(addApple, 850); //VELOCIDADE PADRAO DO JOGO
}



