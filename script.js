var numbers = document.querySelectorAll('.btn-number');
var operations = document.querySelectorAll('.btn-operation');
var clearAll = document.querySelectorAll('.clear');
var decimalBtn = document.getElementById('decimal');
var resultBtn = document.getElementById('equals');

for(var i=0; i<numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', numberPress);
};

for(var i=0; i<operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', operation);
};

for(var i=0; i<clearAll.length; i++) {
    var clearBtn = clearAll[i];
    clearBtn.addEventListener('click', clear);
};

decimalBtn.addEventListener('click', addDecimal);
resultBtn.addEventListener('click', result);



function numberPress() {
    console.log("Цифра");
}

function operation() {
    console.log("Операция");
}

function clear() {
    console.log("c or del");
}

function result() {
    console.log("=");
}

function delet() {
    console.log("del");
}

function addDecimal() {
    console.log(".");
}

