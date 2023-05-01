/*перменные для ввода чисел в полях мин и макс*/
let userTextField1 = document.querySelector('#minField');
let userTextField2 = document.querySelector('#maxField');
let userText;
let minValue=0;
let maxValue=100;
let answerNumber;

/*кнопки*/
let btnToggle = document.querySelector('#btnRetry');
let buttonEvent= document.querySelector('#playbutton');

let orderNumber = 1;  /*номер шага*/
let gameRun = false;

const orderNumberField = document.getElementById('orderNumberField');  /*строка c вопросом N*/
const answerField = document.getElementById('answerField');             /*вы загадали число X*/
const collapseElement = document.querySelector('#hide');                /*скрываемый блок*/

/*перменные для преобразования в текст*/
let answerNumbertoText;
let temp;
let answerNumbertoUnitsText;
let answerNumbertoDecimalText;
let answerNumbertoHundredText;

/* функция обработки вводных данных и запуска игры*/
function play () {
        if (orderNumber == 1) {                                                 /* вводить мин и макс можно только на первом шаге*/
        gameRun = true;
        userText = userTextField1.value;
        minValue = parseInt (userText);
        minValue= (!Number.isNaN(minValue)) && (minValue) || 0;
        minValue = (minValue < -999) ? -999 : minValue;

        userText = userTextField2.value;
        maxValue = parseInt (userText);
        maxValue= (!Number.isNaN(maxValue)) && maxValue || (Number.isNaN(maxValue)) && 100  ;
        maxValue = (maxValue == false) ? 0 : maxValue;                           /* проверка срабатывания на 0*, т.к. 0 || false дают false*/
        maxValue = (maxValue > 999) ? 999 : maxValue;

        answerNumber  = Math.floor((minValue + maxValue) / 2);  /*округление к меньшему числу*/
        questionPhrase() ;   /* самый первый вызов на экран*/
        } else {                                                                        
                if (gameRun)  {                                                                 /* обработка ввода мин и макс во время игры*/                                               
                userTextField1.removeEventListener('keyup', (event) => {event.preventDefault;});
                userTextField2.removeEventListener('keyup', (event) => {event.preventDefault;});
                answerField.innerText = `Закончите игру! поля ввода сейчас не работают. Это число ` + answerNumbertoText + '?'
                } else {answerField.innerText = `Игра закончена. Нажмите кнопку \'Заново\'`}    /* обработка ввода мин и макс когда игра уже закончена*/ 
        }            
        
}

/*нажали кнопку "играть" запускаем игру*/
buttonEvent.addEventListener ('click', play);

/*при нажатии кнопки "заново" открываем спрятанное поле ввода данных*/
document.addEventListener('DOMContentLoaded', () => {       
        const collapse = new bootstrap.Collapse(collapseElement, { toggle: false }); 
        btnToggle.addEventListener('click', (event) => {
                event.preventDefault();
                collapse.show();
                });
        });

/* функция перевода едениц числа в текст*/
function unitstoText () {
        temp = Math.round (10 * (Math.abs(answerNumber) / 10 % 1)); /* извлекаем единицы из числа*/
        switch (temp) {
                case 1: 
                answerNumbertoUnitsText = 'один';
                break;
                case 2: 
                answerNumbertoUnitsText = 'два';
                break;    
                case 3: 
                answerNumbertoUnitsText = 'три';
                break;
                case 4: 
                answerNumbertoUnitsText = 'четыре';
                break;
                case 5:
                answerNumbertoUnitsText = 'пять';
                break;
                case 6:
                answerNumbertoUnitsText = 'шесть';
                break;
                case 7:
                answerNumbertoUnitsText = 'семь';
                break;
                case 8:
                answerNumbertoUnitsText = 'восемь';
                break;
                case 9:
                answerNumbertoUnitsText = 'девять';
                break;
                case 0:
                answerNumbertoUnitsText= '';
                break;
                default: 
                answerNumbertoUnitsText = '';
        }
        if (answerNumber == 0) {
                answerNumbertoUnitsText = 'ноль';
        }
}

/* функция перевода десятков числа в текст*/
function decimaltoText () {
        temp = Math.trunc (Math.abs(answerNumber) / 10); /* извлекаем десятки из числа*/
        if (temp > 10) {temp = Math.floor (10 * (Math. abs(answerNumber) / 100 % 1));} /*если число > 100*/
        switch (temp) {
                case 0: 
                answerNumbertoDecimalText = '';
                break;
                case 1: 
                answerNumbertoDecimalText = '';
                break;    
                case 2: 
                answerNumbertoDecimalText = 'двадцать';
                break;
                case 3: 
                answerNumbertoDecimalText = 'тридцать';
                break;
                case 4:
                answerNumbertoDecimalText = 'сорок';
                break;
                case 5:
                answerNumbertoDecimalText = 'пятьдесят';
                break;
                case 6:
                answerNumbertoDecimalText = 'шестьдесят';
                break;
                case 7:
                answerNumbertoDecimalText = 'семьдесят';
                break;
                case 8:
                answerNumbertoDecimalText = 'восемьдесят';
                break;
                case 9:
                answerNumbertoDecimalText = 'девяносто';
                break;
                default: 
                answerNumbertoDecimalText = '';
        }
}

/* функция перевода сотен числа в текст*/
function hundredtoText () {
        temp = Math.trunc (Math.abs(answerNumber) / 100); /* извлекаем сотни из числа*/
        switch (temp) {
                case 1: 
                answerNumbertoHundredText= 'сто';
                break;
                case 2: 
                answerNumbertoHundredText = 'двести';
                break;    
                case 3: 
                answerNumbertoHundredText = 'триста';
                break;
                case 4: 
                answerNumbertoHundredText = 'четыреста';
                break;
                case 5: 
                answerNumbertoHundredText = 'пятьсот';
                break;
                case 6:
                answerNumbertoHundredText = 'шестьсот';
                break;
                case 7:
                answerNumbertoHundredText = 'семьсот';
                break;
                case 8:
                answerNumbertoHundredText = 'восемьсот';
                break;
                case 9:
                answerNumbertoHundredText = 'девятьсот';
                break;
                default: 
                answerNumbertoHundredText = '';
        }
}

/* функция преобразования числа в текст*/
/*текст раскладывается на три переменные: единицы, десятки, сотни*/
function transformtoText () {
        temp = Math.round ((Math.abs(answerNumber) / 100 % 1) * 100);           /* извлекаем числа 10-20, т.к. их нельзя разложить на части*/
        if ((temp >= 10) && (temp<20)) {
                switch (temp)  {
                        case 10:                   
                        answerNumbertoText = 'десять';
                        break;
                        case 11:                   
                        answerNumbertoText = 'одиннадцать';
                        break ;
                        case 12:                   
                        answerNumbertoText = 'двенадцать';
                        break ;
                        case 13:                   
                        answerNumbertoText = 'тринадцать';
                        break ;
                        case 14:                   
                        answerNumbertoText = 'четырнадцать';
                        break ;
                        case 15:                   
                        answerNumbertoText = 'пятнадцать';
                        break ;
                        case 16:                   
                        answerNumbertoText = 'шестьнадцать';
                        break ;
                        case 17:                   
                        answerNumbertoText = 'семьнадцать';
                        break ;
                        case 18:                   
                        answerNumbertoText = 'восемьнадцать';
                        break ;
                        case 19:                   
                        answerNumbertoText = 'девятнадцать';
                        break ;
                }
                hundredtoText ();                                                               /*если есть сотни, то прибавляем к десяткам*/
                answerNumbertoText = answerNumbertoHundredText + ' ' + answerNumbertoText;
        } else {unitstoText (); decimaltoText (); hundredtoText ();                             /*собираем тескт числа из сотен, десятков и единиц*/
                answerNumbertoText = answerNumbertoHundredText + ' ' + answerNumbertoDecimalText + ' ' +  answerNumbertoUnitsText;
        }
        if (answerNumber < 0) {
                answerNumbertoText = '- ' + answerNumbertoText;                 /*добавляем знак минус для отрицательных чисел*/
        }
        temp = answerNumbertoText.length;                         
        if (temp >= 20 ) {                                                      /*если число меньше 20 символов выводим текстом*/
                answerNumbertoText = answerNumber;
        }
}

/*номер вопроса в строке N*/
orderNumberField.innerText = orderNumber;  

/* функция случайного выбора трёх разных вопросов*/
function questionPhrase() {
        if (gameRun){
                const phraseRandomQuestion = Math.round( 2*Math.random());          /*генератор 0...2*/
                transformtoText (); 
                switch (phraseRandomQuestion) {
                        case 0:
                        answerField.innerText = `Да это легко! Ты загадал ` + answerNumbertoText + '?';  
                        break;
                        case 1: 
                        answerField.innerText = `Наверное, это число ` + answerNumbertoText + '?'; 
                        break;
                        default : answerField.innerText = `А может это число ` + answerNumbertoText + '?'; 
                }
        } else {answerField.innerText = ''}
}

/*кнопка "заново"*/
document.getElementById('btnRetry').addEventListener('click', function () {
        gameRun = true;
        orderNumber = 1;
        orderNumberField.innerText = orderNumber;
        play (); 
})

/*кнопка больше*/
document.getElementById('btnOver').addEventListener('click', function () {
        if (gameRun){
        if (minValue === maxValue){                                     /*все варианты перебраны*/
                const phraseRandom = Math.round( Math.random());        /*генератор 0 либо 1*/
                const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
                answerField.innerText = answerPhrase;               /*выводим я сдаюсь */
                gameRun = false;                                    /*стоп игра*/
        } else {
                minValue = answerNumber  + 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);             /*середина следующего интервала*/
                orderNumber++;                                                 
                orderNumberField.innerText = orderNumber;                       /*меняем номер вопроса в строке N */
                questionPhrase();
        }
    }
})

/*кнопка меньше*/
document.getElementById('btnLess').addEventListener('click', function () {
        if (gameRun){
                if (minValue === maxValue){                                     /*все варианты перебраны*/
                        const phraseRandom = Math.round( Math.random());        /*генератор 0 либо 1*/
                        const answerPhrase = (phraseRandom === 1) ?
                        `Вы загадали неправильное число!\n\u{1F914}` :
                        `Я сдаюсь..\n\u{1F92F}`;
                        answerField.innerText = answerPhrase;                   
                gameRun = false;                                                /*стоп игра*/
        } else {
                maxValue = answerNumber  - 1;
                answerNumber  = Math.floor((minValue + maxValue) / 2);                  /*середина следующего интервала*/
                orderNumber++;                                                  
                orderNumberField.innerText = orderNumber;                               /*меняем номер вопроса в строке N*/
                answerField.innerText = `Вы загадали число ${answerNumber }?`;          /*середина следующего интервала*/
                questionPhrase();
        }
    }
})

/*кнопка угадал*/
document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun){
                const phraseWinner = Math.round( 2*Math.random());                      /*генератор 0...2*/
                switch (phraseWinner) {
                        case 0: 
                        answerField.innerText = `Я всегда угадываю! \n\u{1F60E}`;  ;
                        break;
                        case 1: 
                        answerField.innerText = `Угадывать - моя профессия \n\u{1F60E}`;  
                        break;
                default : answerField.innerText = `Я - толковый угадайка \n\u{1F60E}`; 
        }
        gameRun = false;                                                                /*стоп игра*/
    } 
})

