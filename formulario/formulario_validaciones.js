function init (){
    var flag = true;
    var flagDNI = dniValidation();

    if(!flagDNI){
        flag = false;
    }

    return flag;
}


function printValidationError(variable, idSpan, mesagge){
    idSpan.innerHTML = mesagge;
    variable.style.border = '2px solid red';
    variable.className = 'error_message';
    
}

function validate(variable, idSpan){
    idSpan.innerHTML = '';
    variable.style.border = '2px solid green';
    variable.className = 'none';
}

function validateDNI () {
    var dni_input = document.getElementById("dni");
    var dni_span = document.getElementById("dni_span");
    dniValidation(dni_input, dni_span);
    onlyNumbers(dni_input, dni_span);
}

function validateNames() {
    var names_input = document.getElementById("names");
    var names_span = document.getElementById("names_span");
    wordsValidation(names_input, names_span);
    onlyWords(names_input);
}

function validateLastNames() {
    var lastNames_input = document.getElementById("last_names");
    var lastNames_span = document.getElementById("lastNames_span");
    wordsValidation(lastNames_input, lastNames_span);
    onlyWords(lastNames_input);
}

function validatePhone() {
    var phone_input = document.getElementById("phone");
    var phone_span = document.getElementById("phone_span");
    var complete = onlyNumbers(phone_input, phone_span);
    
    if (complete) {
        validate(phone_input, phone_span);
    }
}

function 

function dniValidation(input, span){
    var dni = input;
    var dni_span = span;
    var dni_length = (dni.value.length)*1;
    var total = 0;
    
    if (dni_length == 10) {

        var provinceDigit = (dni.value.substring(0,2))*1;
        var typeDigit = (dni.value.substring(2,3))*1;
        var dniCheckDigit = (dni.value.substring(9,10))*1;
        
        if ( (typeDigit<6) && (provinceDigit <= 24) ) {
            
            for (var index = 0; index < dni_length-1; index++) {
                
                var aux = (dni.value.substring(index, index+1))*1;

                if (index%2 == 0) {
                    aux = aux*2;
                    if (aux >= 10) {
                        aux -= 9;
                    }
                }
                total += aux;
            }

            var firstDigit = String(total).substring(0, 1);
            var topTen = (((firstDigit)*1)+1)*10;
            var checkDigit = topTen - total;

            if (checkDigit == 10) {
                checkDigit = 0;
            }

            if (checkDigit == dniCheckDigit) {
                validate(dni, dni_span);
            } else {
                printValidationError(dni, dni_span, '<br> El número de cédula no es válida.');
            } 
        } else {
            printValidationError(dni, dni_span, '<br> Los dígitos de provincia y tipo de persona no son correctos.');
        }
    } else {
        printValidationError(dni, dni_span, '<br> Campo obligatorio, la cédula tiene 10 dígitos.');
    }
}

function onlyNumbers(input, span){
    var input_length = input.value.length;

    if (input_length > 0) {
        var input_char = input.value.charCodeAt(input_length-1);

        if (input_length > 10) {
            input.value = input.value.substring(0, input_length-1);
            return false;
        }

        if ((input_char >= 48) && (input_char <= 57)) {
            return true;
        } else {
            input.value = input.value.substring(0, input_length-1);
            return false;
        }
    } else {
        printValidationError(input, span, '<br> Campo obligario.');
        return false;
    }
}

function onlyWords(input){
    var input_length = input.value.length;

    if (input_length > 0) {
        var input_char = input.value.charCodeAt(input_length-1);

        if (((input_char >= 65) && (input_char <= 90)) || (input_char == 32) || ((input_char >= 97) && (input_char <= 122))) {
            return true;
        } else {
            input.value = input.value.substring(0, input_length-1);
            return false;
        }
    } else {
        return false;
    }
}

function wordsValidation(input, input_span){
    var input_length = input.value.length;

    if (input_length != 0) {
        var wordsArray = input.value.split(" ");

        if((wordsArray.length == 2) && (wordsArray[1] != '')){
            validate(input, input_span);
            return true;
        } else {

            if (input == document.getElementById("names") ) {
                printValidationError(input, input_span, '<br> Se deben ingresar los dos nombres');
            } else {
                printValidationError(input, input_span, '<br> Se deben ingresar los dos apellidos');
            }
            return false;
        }
    } else {
        printValidationError(input, input_span, '<br> Campo obligatorio.');
        return false;
    }
}

function emailValidation(){
    var email = document.getElementById("email");
    var email_span = document.getElementById("email_span");
    var email_parts = email.value.split("@");

    if (email_parts.length == 2) {

        if (email_parts[0].length >= 3) {

            if ((email_parts[1] == 'est.ups.edu.ec') || (email_parts[1] == 'ups.edu.ec')) {
                validate(email, email_span);
                //return true;
            } else {
                printValidationError(email, email_span, '<br> Extensión de correo no perteneciente a la UPS.');
                //return false;
            }
        } else {
            printValidationError(email, email_span, '<br> Extensión de usuario demasiado corta.');
            //return false;
        }
    } else {
        printValidationError(email, email_span, '<br> Correo no válido.');
        //return false;
    }
}

function birthdayValidation(){

}

function passwordValidation(){

}