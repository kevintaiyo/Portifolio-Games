function addApple(){
    //variavel para criar as divs que vão aparecer na tela para o usuario
    var apple = document.createElement('div');
    apple.setAttribute("class" , "apple");

    var p1 = Math.floor(Math.random() * 1500);
    var p2 = Math.floor(Math.random() * 900);

    apple.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px;");
    apple.setAttribute("onclick", "getApple(this)"); 
    document.body.appendChild(apple);
}

function getApple(el){
    document.body.removeChild(el);
}


function start(){
    //intervalo de tempo para ir adicionando os elementos na pagina
    setInterval(addApple, 850);
}


