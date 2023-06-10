
var contarApple = 0; //CONTAR MAÇÃS COLETADAS

function cronometro() {
    var tempoInicial = Date.now(); // Obter o tempo inicial em milissegundos
    var display = document.getElementById('tempo'); // Obter elemento HTML para exibição do cronômetro
    var tempoTotal = 60; // Definir o tempo total em segundos
    
    var intervalo = setInterval(function() {
      var tempoAtual = Date.now(); // Obter o tempo atual em milissegundos
      var tempoPassado = tempoAtual - tempoInicial; // Calcular o tempo passado em milissegundos
      
      // Converter o tempo passado para segundos restantes
      var segundosRestantes = tempoTotal - Math.floor(tempoPassado / 1000);
      
      // Atualizar o conteúdo do elemento HTML
      display.innerHTML = 'Tempo Restante: ' +  segundosRestantes + ' segundos';
      
      // Verificar se o tempo chegou a zero
      if (segundosRestantes <= 0) {
        clearInterval(intervalo); // Parar o cronômetro
        alert("Fim de jogo, Tempo Esgotado, Sua pontuação é de = " + contarApple + " pontos");
        window.location.reload();
      }
    }, 1000); // Atualizar a cada segundo (1000 milissegundos)
  }

function addApple(){
    //VARIAVEL PARA IMPRIMIR OS ELEMENTOS NA PAGINA HTML
    var apple = document.createElement('div');
    apple.setAttribute("class" , "apple");

    var p1 = Math.floor(Math.random() * 1500);
    var p2 = Math.floor(Math.random() * 500);

    apple.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px;");
    apple.setAttribute("onclick", "getApple(this)"); 
    document.body.appendChild(apple);

    //AS MAÇÃS NÃO VÃO FICAR O TEMPO TODO NA TELA, PARA DIFICULTAR UM POUCO O JOGADOR
    setTimeout(function() { 
        apple.remove();
    }, 5000);
}

function addPedra(){
    //VARIAVEL PARA IMPRIMIR OS ELEMENTOS PEDRA NA PAGINA HTML
    var pedra = document.createElement('div');
    pedra.setAttribute("class" , "pedra");

    var p1 = Math.floor(Math.random() * 1500);
    var p2 = Math.floor(Math.random() * 500);

    pedra.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px;");
    pedra.setAttribute("onclick", "getPedra(this)"); 
    document.body.appendChild(pedra);

    //AS PEDRAS NÃO PODEM FICAR TODO O TEMPO TODO NA TELA, POR ISSO TEMOS A FUNÇÃO ABAIXO PARA FAZER O ELEMENTO PEDRA SUMIR DEPOIS DE 
    setTimeout(function() { 
        pedra.remove();
    }, 8000);
}

function getPedra(finalizar){
  var click = document.body.removeChild(finalizar);

  if(click = 1){
    alert("Fim de jogo!, Sua pontuação é de = " + contarApple + " pontos")
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
    document.querySelector('#menu').style.display = 'none'; //FUNÇÃO PARA FAZER O BOTAO DE INICIAR E VOLTAR SUMIR, AO COMEÇAR O JOGO
    cronometro(); //CRONOMETRO PARA DAR FIM NO JOGO 
}
