
var disply = document.getElementById('displayID')

function calculate(x) {
    disply.value = disply.value + x;
}

function equalFun() {
    var res = eval(disply.value);
    disply.value = res;
}

function delFun() {
    var disTxt = disply.value;
    disply.value = disTxt.slice(0, -1);
}


function sqrtFunc() {
    var num = disply.value;
    disply.value = Math.sqrt(num);
}

function clrFun() {
    disply.value = "";
}