const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

// mengambil elemen operator
const operators = document.querySelectorAll(".operator");

// event tombol operator ( * / + -)
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const equalSign = document.querySelector(".equal-sign");

// event tombol =
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

// fungsi perhitungan
const calculate = () => {
    let result;
    switch (calculationOperator) {
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber); // perkalian
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber); // pembagian
            break;
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber); // penjumlahan
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber); // pengurangan
            break;
        default:
            break;
    }
    currentNumber = result; // menyimpan hasil kalkulasi
    calculationOperator = ""; // mengosongkan nilai operator
}

// mengambil elemen AC
const allClear = document.querySelector(".all-clear");

// event tombol AC
allClear.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

// fungsi clear semua variable
const clearAll = () => {
    currentNumber = "0";
    prevNumber = "";
    calculationOperator = "";
}

// mengambil element . (decimal)
const decimal = document.querySelector(".decimal");

// event tombol . (decimal)
decimal.addEventListener("click", () => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

// menambahkan titik decimal
const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
}