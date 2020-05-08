function init(){
    var answer = document.getElementById('answer');
    answer.value = "0";
}

function writeValue(value){
    var panel = document.getElementById('panel');
    panel.value += value;
}

function clearPanel(){
    var panel = document.getElementById('panel');
    var answer = document.getElementById('answer');

    panel.value = " ";
    answer.value = "0";
}

function getAnswer(){
    var panel = document.getElementById('panel');
    var answer = document.getElementById('answer');

    var result = eval(panel.value);
    answer.value = panel.value + "=" + result;
    panel.value = result;
}
