var images = ["images/image0.jpg", "images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", 
                "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg"];
var imagesArray = new Array(5);
var imagesArrayPosition = 0; // Index actual que tendrá el array de imágenes en la galería.

// Variables de velocidad:
var porcentageIncrement = 2; // Incremento += 2%.
var animationSpeed = 25; // Intervalo: Por defecto, 25 ms.

// Variables de posición:
var rigthPorcentage = 0; // Valor actual que tendrá hacia la derecha.
var positionLimitMax = 100; // Movimiento máximo a la que llegará la animación.
var positionLimitMin = 0; // Movimiento mínimo a la que llegará la animación, sirve para centrar.
var positionMove = 80; // Posicion relativa que permite realizar la segunda animación.

// Variables de control:
var flagAnimation = false; // Bandera Global que controla las animaciones.
var stopRight; // Variable que almacena la animación principal hacia la derecha.
var stopLeft; // Variable que almacena la animación principal hacia la izquiera.
var stopAux; // Variable que almacena la segunda animación tanto para la izq, como der.

function load(){
    if (!flagAnimation){
        loadImages();
    }
}

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


function previousImage(){
    imagesArrayPosition--;
    checkArrayPosition();
    if (!flagAnimation) {
        stopRight = setInterval(moveRight, animationSpeed);
    }
}

function moveRight(){
    flagAnimation = true;
    document.getElementById("currentImage").style.right = decrementRigth(rigthPorcentage, porcentageIncrement)+'%';
    if (rigthPorcentage <= -positionLimitMax) {
        changeImage();
        clearInterval(stopRight);
        rigthPorcentage = positionMove;
        document.getElementById("currentImage").style.right = `-${rigthPorcentage}%`;
        stopAux = setInterval(secondMoveRight, animationSpeed);
    }
}

function secondMoveRight(){
    document.getElementById("currentImage").style.right = decrementRigth(rigthPorcentage, porcentageIncrement)+'%';
    if (rigthPorcentage <= positionLimitMin) {
        flagAnimation = false;
        clearInterval(stopAux);
        rigthPorcentage = 0;
        document.getElementById("currentImage").style.right = `${rigthPorcentage}%`;
    }
}


function nextImage(){
    imagesArrayPosition++;
    checkArrayPosition();
    if (!flagAnimation){
        stopLeft = setInterval(moveLeft, animationSpeed);
    }
}

function moveLeft(){
    flagAnimation = true;
    document.getElementById("currentImage").style.right = incrementRigth(rigthPorcentage, porcentageIncrement)+'%';
    if (rigthPorcentage >= positionLimitMax) {
        changeImage();
        clearInterval(stopLeft);
        rigthPorcentage = -positionMove;
        document.getElementById("currentImage").style.right = `-${rigthPorcentage}%`;
        stopAux = setInterval(secondMoveLeft, animationSpeed);
    }
}

function secondMoveLeft(){
    document.getElementById("currentImage").style.right = incrementRigth(rigthPorcentage, porcentageIncrement)+'%';
    if (rigthPorcentage >= positionLimitMin) {
        flagAnimation = false;
        clearInterval(stopAux);
        rigthPorcentage = 0;
        document.getElementById("currentImage").style.right = `${rigthPorcentage}%`;
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

function getRandomNumber (max) {
    return (Math.floor(Math.random()*(max+1)));
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

function changeImage(){
    document.getElementById("currentImage").src = imagesArray[imagesArrayPosition];
}
