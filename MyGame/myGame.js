
var contarApple = 0; //CONTAR MAÇÃS COLETADAS
var tempo = setTimeout(60000);

function addApple(){
    //VARIAVEL PARA IMPRIMIR OS ELEMENTOS NA PAGINA HTML
    var apple = document.createElement('div');
    apple.setAttribute("class" , "apple");

    var p1 = Math.floor(Math.random() * 1600);
    var p2 = Math.floor(Math.random() * 900);

    apple.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px;");
    apple.setAttribute("onclick", "getApple(this)"); 
    document.body.appendChild(apple);
}

function addPedra(){
    //VARIAVEL PARA IMPRIMIR OS ELEMENTOS PEDRA NA PAGINA HTML
    var pedra = document.createElement('div');
    pedra.setAttribute("class" , "pedra");

    var p1 = Math.floor(Math.random() * 1600);
    var p2 = Math.floor(Math.random() * 900);

    pedra.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px;");
    pedra.setAttribute("onclick", "getPedra(this)"); 
    document.body.appendChild(pedra);

    //AS PEDRAS NÃO PODEM FICAR TODO O TEMPO TODO NA TELA, POR ISSO TEMOS A FUNÇÃO ABAIXO PARA FAZER O ELEMENTO PEDRA SUMIR DEPOIS DE 
    setTimeout(function() { 
        pedra.remove();
    }, 4000);
}

function getPedra(finalizar){
  var click = document.body.removeChild(finalizar);

  if(click = 1){
    alert("Fim de jogo!")
    window.location.reload();
  }
}

function pedras (){
    setInterval(addPedra, 500);
}

function getConta(){
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
        setInterval(addApple, 750)
    }else if(contarApple == 50){
        pedras();
    }else{

    }
}

//FUNÇÃO PARA FAZER O FUNCIONAMENTO DO JOGO QUANDO APERTAR O BOÃO START
function start(){
    setInterval(addApple, 850); //VELOCIDADE PADRAO DO JOGO
    document.querySelector('#iniciate').style.display = 'none'; //FUNÇÃO PARA FAZER O BOTAO DE INICIAR SUMIR AO COMEÇAR O JOGO
}
