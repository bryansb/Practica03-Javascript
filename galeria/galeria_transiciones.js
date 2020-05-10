var images = ["images/image0.jpg", "images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", 
                "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg"];
var imagesArray = new Array(5);
var imagesArrayPosition = 0;
var leftPorcentage = 0;
var rigthPorcentage = 0;

var control = 0;

var velocidad = 2; // Incremento

var velocidad2 = 1; // Intervalo

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
    
    // Se carga la primera imagen y se la visualiza
    document.getElementById("currentImage").src = imagesArray[0];
    document.getElementById("currentImage").style.visibility = 'visible';
    
    document.getElementById("currentImage").style.right = 0+'%';
    
    checkArrayPosition();
}

var stopRight;
function previousImage(){
    imagesArrayPosition--;
    checkArrayPosition();
    
    if (!flagG) {
        stopRight = setInterval(moveRight, 25);
    }
    
}

function moveRight () {
    flagG = true;
    document.getElementById("currentImage").style.right = decrementRigth(rigthPorcentage, velocidad)+'%';
    if (rigthPorcentage <= -100) {
        changeImage();
        clearInterval(stopRight);
        rigthPorcentage = 90;
        document.getElementById("currentImage").style.right = "90%";
        stopAux = setInterval(aux2, 25);
    }
}

function aux2 () {
    document.getElementById("currentImage").style.right = decrementRigth(rigthPorcentage, velocidad)+'%';
    if (rigthPorcentage <= 0) {
        console.log(rigthPorcentage);
        flagG = false;
        clearInterval(stopAux);
        rigthPorcentage = 0;
        document.getElementById("currentImage").style.right = "0%";
    }
}

var stopLeft;
var flagG = false;
function nextImage(){
    imagesArrayPosition++;
    checkArrayPosition();
    
    if (!flagG){
        stopLeft = setInterval(moveLeft, 25);
    }
}


var stopAux;
function moveLeft () {
    flagG = true;
    document.getElementById("currentImage").style.right = incrementRigth(rigthPorcentage, velocidad)+'%';
    if (rigthPorcentage >= 100) {
        changeImage();
        clearInterval(stopLeft);
        rigthPorcentage = -90;
        document.getElementById("currentImage").style.right = "-90%";
        stopAux = setInterval(aux, 25);
    }
}

function aux(){
    document.getElementById("currentImage").style.right = incrementRigth(rigthPorcentage, velocidad)+'%';
    if (rigthPorcentage >= 0) {
        console.log(rigthPorcentage);
        flagG = false;
        clearInterval(stopAux);
        rigthPorcentage = 0;
        document.getElementById("currentImage").style.right = "0%";
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
    document.getElementById("currentImage").style.transition = `${2}s`;
}

function incrementRigth (value, step) {
    value += step;
    rigthPorcentage = value;
    return value;
}

function decrementRigth (value, step) {
    value -= step;
    rigthPorcentage = value;
    return value;
}

function incrementLeft (value, step) {
    value += step;
    rigthPorcentage
    //leftPorcentage = value;
    //rigthPorcentage = (value*-1);
    return value;
}

function changeImage(){
    document.getElementById("currentImage").src = imagesArray[imagesArrayPosition];
}

function load(){
    if (!flagG){
        loadImages();
    }
}