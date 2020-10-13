let numbers = document.querySelectorAll('.btn-number');
let operations = document.querySelectorAll('.btn-operation');
let clearAll = document.querySelectorAll('.clear');
let decimalBtn = document.getElementById('decimal');
let resultBtn = document.getElementById('equals');
let curInput = document.getElementById('current-operand');
let num = [];
let memoryOperator = '';
let startedNew = false;

for(let i=0; i<numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        let elValue = e.target.outerText;
        numberPress(+elValue);
    });
};

for(let i=0; i<operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        let elValue = e.target.outerText;
        curInput.innerHTML = operation(elValue);
    });
};

for(let i=0; i<clearAll.length; i++) {
    let clearBtn = clearAll[i];
    clearBtn.addEventListener('click', function (e) {
        let elValue = e.target.outerText;
        clear(elValue);
    });
};

decimalBtn.addEventListener('click', function (e) {
    let elValue = e.target.outerText;
    addDecimal(elValue);
});
resultBtn.addEventListener('click', function (e) {
    let elValue = e.target.outerText;
    result(elValue);
});



function numberPress(value) {
    if (startedNew) {
        startedNew = false;
        curInput.innerHTML = '';
    }
    curentInput(value);
}

function operation(value) {
    if (!curInput.innerHTML && value == "-") {
       return curentInput(value);
    } 
    startedNew = true;
    let result = curentInput();
    num.push(+(result));
    if (num.length > 1 && memoryOperator) {
        switch (memoryOperator) {
            case "+":
                result = num[0] + num[1];
                num = [result];
                break;
            case "-":
                result = num[0] - num[1];
                num = [result];
                break;
            case "*":
                result = num[0] * num[1];
                num = [result];
                break;
            case "÷":
                result = num[0] / num[1];
                num = [result];
                break;
            case "^":
                result = Math.pow(num[0],num[1]);
                num = [result];
                break;
            case "√":
                result = Math.sqrt(num[0]);
                num = [result];
                break;
            default:
                console.log("Неть");
        }
        memoryOperator = value;
    } else {
        memoryOperator = value;
        
    }
    return (+parseFloat(result).toFixed(10));
}

function clear(value) {
    switch (value) {
        case "DEL":
            let clearRes = curInput.innerHTML;
            curInput.innerHTML = clearRes.substring(0,clearRes.length-1);
            break;
        case "AC":
            curInput.innerHTML = "";
            num = [];
            memoryOperator = "";
            break;
        default:
    }
}

function result(value) {
    curInput.innerHTML = operation(memoryOperator);
    memoryOperator = '';
    num = [];
}

function addDecimal(value) {
    curentInput(value);
}

function curentInput(value) {
    if(value || value == 0) {
        (curInput.innerHTML) ? (curInput.innerHTML += value) : (curInput.innerHTML = value);
    }
    let a = curInput.innerHTML;
    return a;
}

