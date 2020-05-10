var images = ["images/image0.jpg", "images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg"];
var imagesArray = new Array(5);
var imagesArrayPosition = 0;
var leftPorcentage = 0;
var rigthPorcentage = 0;

var control = 0;

var velocidad = 1;
var velocidad2 = 5;

function loadImages(){
    imagesArrayPosition = 0;
    var numbers = [];
    var aux = 0;
    
    // En este while se obtiene un array de numeros aleatorios
    while (aux < 5) {
        var number = getRandomNumber(9);
        if (numbers.length == 0) {
            numbers.push(number);
            aux++;
        } else {
            if(!numbers.includes(number)) {
                numbers.push(number);
                aux++;
            }
        }
    }
    
    // Aqui se carga las imagenes al array de 5.
    for (let index = 0; index < imagesArray.length; index++) {
        imagesArray[index] = images[numbers[index]];
    }

    console.log(imagesArray);

    // Se carga la primera imagen y se la visualiza
    document.getElementById("currentImage").src = imagesArray[0];
    document.getElementById("currentImage").style.visibility = 'visible';
    

    // Si se cambia
    var recorridoDer = document.getElementById("currentImage").style.right.split('%');
    var recorridoIzq = document.getElementById("currentImage").style.left.split('%');

    console.log('Derecha: '+recorridoDer);
    console.log('Izquierda: '+recorridoIzq);

    // Resetea los valores de los porcentajes en los parametros left y right
    /* if ((rigthPorcentage != -25)) {
        rigthPorcentage = -25;
        document.getElementById("currentImage").style.right = rigthPorcentage+'%';
    }

    if (leftPorcentage != 25) {
        leftPorcentage = 25;
        document.getElementById("currentImage").style.left = leftPorcentage+'%';
    } */
    document.getElementById("currentImage").style.right = 0+'%';
    document.getElementById("currentImage").style.left = 0+'%';
    
    checkArrayPosition();
}

var stopRight;
function previousImage(){
    imagesArrayPosition--;
    checkArrayPosition();
    document.getElementById("currentImage").style.right = null;
    stopRight = setInterval(moveRight, velocidad2);
    //console.log(imagesArrayPosition);
    //tem();
}

function moveRight () {
    /* var recorridoDer = document.getElementById("currentImage").style.right.split('%');
    var recorridoIzq = document.getElementById("currentImage").style.left.split('%');
    console.log('Derecha Right: '+recorridoDer);
    console.log('Izquierda Rigth: '+recorridoIzq); */
    
    document.getElementById("currentImage").style.left = incrementLeft(leftPorcentage, velocidad)+'%';
    if ((leftPorcentage == 50)) {
        console.log('Igual a 50');
        //changeImagen();
        clearInterval(stopRight);
    }
}

var stopLeft;
function nextImage(){
    imagesArrayPosition++;
    checkArrayPosition();
    document.getElementById("currentImage").style.left = null;
    stopLeft = setInterval(moveLeft, velocidad2);
    //stopRight = setInterval(moveRight, velocidad2);
    //rigthPorcentage = 0;
    //console.log(imagesArrayPosition);
    //tem();   
}



function moveLeft () {
    /* var recorridoDer = document.getElementById("currentImage").style.right.split('%');
    var recorridoIzq = document.getElementById("currentImage").style.left.split('%');
    console.log('Derecha Left: '+ recorridoDer);
    console.log('Izquierda Left: '+ recorridoIzq); */
    
    document.getElementById("currentImage").style.right = incrementRigth(rigthPorcentage, velocidad)+'%';
    if (rigthPorcentage == 50) {
        console.log('Igual a 50');
        //changeImage();
        clearInterval(stopLeft);
    }
}

function checkArrayPosition(){

    if (imagesArrayPosition == 0) {
        document.getElementById("previous").disabled = true;
        document.getElementById("next").disabled = false;
    } else if (imagesArrayPosition == 4) {
        document.getElementById("previous").disabled = false;
        document.getElementById("next").disabled = true;
    } else {
        document.getElementById("previous").disabled = false;
        document.getElementById("next").disabled = false;
    }

}

function getRandomNumber(max) {
    return (Math.floor(Math.random()*(max+1)));
}

function setTimeZero () {
    document.getElementById("currentImage").style.transition = 0+'s';
}

function setTime () {
    document.getElementById("currentImage").style.transition = `${4}s`;
}


function incrementRigth (value, step) {
    value += step;
    rigthPorcentage = value;
    leftPorcentage = (value*-1);
    return value;
}

function incrementLeft (value, step) {
    value += step;
    leftPorcentage = value;
    rigthPorcentage = (value*-1);
    return value;
}

function changeImage(){
    document.getElementById("currentImage").src = imagesArray[imagesArrayPosition];
}

function tem(){
    if ((rigthPorcentage != -25)) {
        rigthPorcentage = -25;
        document.getElementById("currentImage").style.right = rigthPorcentage+'%';
    }

    if (leftPorcentage != 25) {
        leftPorcentage = 25;
        document.getElementById("currentImage").style.left = leftPorcentage+'%';
    }
}