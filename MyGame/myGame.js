
var contarApple = 0;

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
}

function getApple(el){
    document.body.removeChild(el);
    contarApple++;
    getConta(); //CHAMANDO A FUNÇÃO
    
    //CONDIÇÃO PARA FAZER A VELOCIDADE AUMENTAR DE ACORDO COM O NUMERO DE MAÇAS COLETADAS
    if(contarApple == 10){
        setInterval(addApple, 750);
    }else if(contarApple == 30){
        setInterval(addApple, 650)
    }else{

    }
}



function start(){
    setInterval(addApple, 850); //VELOCIDADE PADRAO DO JOGO
}



