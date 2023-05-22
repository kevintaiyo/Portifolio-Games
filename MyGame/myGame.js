var contarApples = 0;

function addApple(){
    //variavel para criar as divs que vão aparecer na tela para o usuario
    var apple = document.createElement('div');
    apple.setAttribute("class" , "apple");

    var p1 = Math.floor(Math.random() * 1500);
    var p2 = Math.floor(Math.random() * 900);

    apple.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px; background-image: url('imgsMyGame/apple.png')");
    apple.setAttribute("onclick", "getApple(this)"); 
    
    document.body.appendChild(apple);
}

function getApple(el){
    document.body.removeChild(el);
    contarApples++;
    countApples();
}

function countApples(){
    var contarElementos = document.getElementById('contarApples')
}

function start(){
    //intervalo de tempo para ir adicionando os elementos na pagina
    setInterval(addApple, 900);
}


//REVER CODIGO
// var appleCount = 0; // Variável para contar as maçãs coletadas

// function addApple() {
//     var apple = document.createElement('div');
//     apple.setAttribute("class", "apple");

//     var p1 = Math.floor(Math.random() * 1500);
//     var p2 = Math.floor(Math.random() * 900);

//     apple.setAttribute("style", "left:" +  p1 + "px; top:" + p2 + "px; background-image: url(imgsMyGame/apple.png)");
//     apple.setAttribute("onclick", "getApple(this)"); 
    
//     document.body.appendChild(apple);
// }

// function getApple(el) {
//     document.body.removeChild(el);
//     appleCount++; // Incrementa o contador de maçãs
//     countApples(); // Atualiza a contagem exibida na tela
// }

// function countApples() {
//     var countElement = document.getElementById('appleCount');
//     countElement.textContent = "Maçãs coletadas: " + appleCount;
// }

// function start() {
//     setInterval(addApple, 900);
//     countApples(); // Inicializa a contagem de maçãs na tela
// }