let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_plus').addEventListener('click', function () {
    
    lastOperand=parseInt (inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_minus').addEventListener('click', function () {
    
    lastOperand=parseInt (inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';
})

document.getElementById('btn_multi').addEventListener('click', function () {
    
    lastOperand=parseInt (inputWindow.value);
    operation = 'multi';
    inputWindow.value = '';
})

document.getElementById('btn_div').addEventListener('click', function () {
    
    lastOperand=parseInt (inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('btn_sqr').addEventListener('click', function () {
    
    lastOperand=parseInt (inputWindow.value);
    operation = 'sqr';
    inputWindow.value = '';
})

document.getElementById('btn_calc').addEventListener('click', function () {
  
    switch (operation) {
        case 'sum': 
        inputWindow.value = parseInt(inputWindow.value)+lastOperand; 
        break;
        case 'minus': 
        inputWindow.value = parseInt(inputWindow.value)-lastOperand; 
        break;
        case 'multi': 
        inputWindow.value = parseInt(inputWindow.value)*lastOperand;
        break;
        case 'div': 
        inputWindow.value = lastOperand/parseInt(inputWindow.value);
        break;
        case 'sqr': 
        inputWindow.value = lastOperand ** (1/2);
        break;
    }
    operation = null;
})

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_one').addEventListener('click', function () {
    
    inputWindow.value += '1';
})

document.getElementById('btn_two').addEventListener('click', function () {
   
    inputWindow.value += '2';
})

document.getElementById('btn_three').addEventListener('click', function () {
  
    inputWindow.value += '3';
})

document.getElementById('btn_four').addEventListener('click', function () {
  
    inputWindow.value += '4';
})

document.getElementById('btn_five').addEventListener('click', function () {
  
    inputWindow.value += '5';
})

document.getElementById('btn_sixth').addEventListener('click', function () {
  
    inputWindow.value += '6';
})

document.getElementById('btn_seven').addEventListener('click', function () {
  
    inputWindow.value += '7';
})

document.getElementById('btn_eight').addEventListener('click', function () {
  
    inputWindow.value += '8';
})

document.getElementById('btn_nine').addEventListener('click', function () {
  
    inputWindow.value += '9';
})

document.getElementById('btn_zero').addEventListener('click', function () {
  
    inputWindow.value += '0';
})

