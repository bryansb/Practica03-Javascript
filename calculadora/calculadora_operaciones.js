function init(){
    var answer = document.getElementById('answer');
    answer.textContent = "0";
}

function writeValue(value){
    var panel = document.getElementById('panel');
    panel.textContent = panel.textContent + value;
}

function clearPanel(){
    var panel = document.getElementById('panel');
    var answer = document.getElementById('answer');

    panel.textContent = " ";
    answer.textContent = "0";
}

function getAnswer(){
    var panel = document.getElementById('panel');
    var answer = document.getElementById('answer');

    var result = eval(panel.textContent);
    answer.textContent = panel.textContent + "=" + result;
    panel.textContent = result;
}
