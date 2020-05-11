var flags = [false, false, false, false, false, false, false, false];

function validateEmptyInputs(){
    var flag = false;
    var registerForm = document.forms[0].elements;
    var form_length = registerForm.length;

    for (var index = 0; index < form_length; index++) {
        var element = registerForm[index];

        if (element.value ==''){
            switch (element.id) {
                case "dni":
                    var span = document.getElementById("dni_span");
                    printValidationError(element, span, '<br> Campo cédula obligatoria.');
                    break;
                case "names":
                    var span = document.getElementById("names_span");
                    printValidationError(element, span, '<br> Campo nombres obligatorio.');
                    break;
                case "last_names":
                    var span = document.getElementById("lastNames_span");
                    printValidationError(element, span, '<br> Campo apellidos obligatorio.');
                    break; 
                case "address":
                    var span = document.getElementById("address_span");
                    printValidationError(element, span, '<br> Campo dirección obligatorio.');
                    break;
                case "phone":
                    var span = document.getElementById("phone_span");
                    printValidationError(element, span, '<br> Campo teléfono obligatorio.'); 
                    break;
                case "birthday":
                    var span = document.getElementById("birthday_span");
                    printValidationError(element, span, '<br> Campo nacimiento obligatorio.');
                    break;
                case "email":
                    var span = document.getElementById("email_span");
                    printValidationError(element, span, '<br> Campo email obligatorio.');
                    break;
                case "password":
                    var span = document.getElementById("password_span");
                    printValidationError(element, span, '<br> Campo contraseña obligatorio.');  
                    break;
                default:
                    break;
            }
        } else {
            if(flags[0] && flags[1] && flags[2] && flags[3] && flags[4] && flags[5] && flags[6] && flags[7]) {
                flag = true;
            }
        }

    }
    return flag;
}


function printValidationError(variable, idSpan, mesagge){
    idSpan.innerHTML = mesagge;
    variable.style.border = '2px solid red';
    idSpan.style.color = 'red';
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
    var flagValidation = dniValidation(dni_input, dni_span);
    var flagNumbers = onlyNumbers(dni_input, dni_span);

    if (flagValidation && flagNumbers) {
        flags[0] = true;
    }
}

function validateNames() {
    var names_input = document.getElementById("names");
    var names_span = document.getElementById("names_span");
    var flagValidation = wordsValidation(names_input, names_span);
    var flagWords = onlyWords(names_input);

    if (flagValidation && flagWords) {
        flags[1] = true;
    }
}

function validateLastNames() {
    var lastNames_input = document.getElementById("last_names");
    var lastNames_span = document.getElementById("lastNames_span");
    var flagValidation = wordsValidation(lastNames_input, lastNames_span);
    var flagWords = onlyWords(lastNames_input);

    if (flagValidation && flagWords) {
        flags[2] = true;
    }
}

function validateAddress() {
    var address_input = document.getElementById("address");
    var address_span = document.getElementById("address_span");
    var flagValidation = false;

    if (address_input.value.trim() != "") {
        validate(address_input, address_span);
        flagValidation = true;
    } else {
        printValidationError(address_input, address_span, '<br> Por favor, ingrese una dirección.');
    }
    
    flags[3] = flagValidation;
}

function validatePhone() {
    var phone_input = document.getElementById("phone");
    var phone_span = document.getElementById("phone_span");
    var flagNumbers = onlyNumbers(phone_input, phone_span);
    
    if (flagNumbers) {
        validate(phone_input, phone_span);
        flags[4] = true;
    }
}

function validateBirthday(){
    var birthday_input = document.getElementById("birthday");
    var birthday_span = document.getElementById("birthday_span");
    var flagNumbers = onlyNumbers(birthday_input, birthday_span);
    var flagValidation = birthdayValidation(birthday_input, birthday_span);

    if (flagNumbers && flagValidation) {
        validate(birthday_input, birthday_span);
        flags[5] = true;
    } else {
        printValidationError(birthday_input, birthday_span, '<br> Ingresar en el formato: (01-31)/(01-12)/(1900-2020).');
    }
}

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
                return true;
            } else {
                printValidationError(dni, dni_span, '<br> El número de cédula no es válida.');
                return false;
            } 
        } else {
            printValidationError(dni, dni_span, '<br> Los dígitos de provincia y tipo de persona no son correctos.');
            return false;
        }
    } else {
        printValidationError(dni, dni_span, '<br> Campo obligatorio, la cédula tiene 10 dígitos.');
        return false;
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
    var flagValidation = false;
    var email = document.getElementById("email");
    var email_span = document.getElementById("email_span");
    var email_parts = email.value.split("@");

    if (email_parts.length == 2) {

        if (email_parts[0].length >= 3) {

            if ((email_parts[1] == 'est.ups.edu.ec') || (email_parts[1] == 'ups.edu.ec')) {
                validate(email, email_span);
                flagValidation = true;
            } else {
                printValidationError(email, email_span, '<br> Extensión de correo no perteneciente a la UPS.');
            }
        } else {
            printValidationError(email, email_span, '<br> Extensión de usuario demasiado corta.');
        }
    } else {
        printValidationError(email, email_span, '<br> Correo no válido.');
    }

    flags[6] = flagValidation;
}

function birthdayValidation(birthday){
    if ((birthday.value.length > 0)) {
        var dd = birthday.value.substring(0,2);

        if (((dd >= 0) && (dd <= 31))) {
            if (birthday.value.length == 2) {
                birthday.value += '/';
            }
            var mm = birthday.value.substring(3,5);

            if (((mm >= 0) && (mm <= 12))) {
                if (birthday.value.length == 5) {
                    birthday.value += '/';
                }
                var aaaa = birthday.value.substring(6,11);

                if ((aaaa <= 2020)) {
                    if (!(aaaa >= 1900)){
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    var mmTemp =  birthday.value.substring(0,6);
                    birthday.value = mmTemp;
                    return false;
                }
            } else {
                var ddTemp =  birthday.value.substring(0,3);
                birthday.value = ddTemp;
                return false;
            }
        } else {
            birthday.value ='';
            return false;
        }
    }
}

function passwordValidation(){
    var flagValidation = false;
    var password_input = document.getElementById("password");
    var password_span = document.getElementById("password_span");

    if (password_input.value.length >= 8) {
        var containtsAt = password_input.value.includes('@');
        var containtsDollar = password_input.value.includes('$');
        var containtsUnderscore = password_input.value.includes('_');
        
        if (containtsAt || containtsDollar || containtsUnderscore) {
            var containtsUpperCase = false;
            var containtsLowerCase = false;

            for (index = 0; index < password_input.value.length; index++) {
                var passwordChar = password_input.value.charCodeAt(index);

                if (((passwordChar >= 65) && (passwordChar <= 90)) || ((passwordChar >= 97) && (passwordChar <= 122))){
                    var lowerCase = password_input.value.charAt(index).toLowerCase();
                    var upperCase = password_input.value.charAt(index).toUpperCase();

                    if (passwordChar == lowerCase.charCodeAt(0)) {
                        containtsLowerCase = true;
                    }
                    if (passwordChar == upperCase.charCodeAt(0)) {
                        containtsUpperCase = true;
                    }
                    if ((containtsLowerCase)&&(containtsUpperCase)){
                        index = password_input.value.length;
                    }
                }
            }
            
            if (containtsUpperCase && containtsLowerCase) {
                validate(password_input, password_span);
                flagValidation = true;
            } else {
                printValidationError(password_input, password_span, '<br> Mínimo 1 letra mayúscula y 1 letra minúscula son requeridos.');
            }
        } else {
            printValidationError(password_input, password_span, '<br> Mínimo 1 caracter especial (@, $ o _) requerido.');
        }
    } else {
        printValidationError(password_input, password_span, '<br> Mínimo 8 caracteres son requeridos.');
    }

    flags[7] = flagValidation;
}