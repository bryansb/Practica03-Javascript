function init(){
    document.getElementById('answer').value = 0;
}

function writeValue(value){
    document.getElementById('panel').value += value;
}

function clearPanel(){
    document.getElementById('panel').value = " ";
    document.getElementById('answer').value = "0";
}

function getAnswer(){
    var result = eval(panel.value);
    document.getElementById('answer').value = document.getElementById('panel').value + "=" + (result);
    document.getElementById('panel').value = result;
}