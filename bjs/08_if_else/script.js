let minValue; /*Минимальное значение*/
let maxValue; /*Максимальное значение*/
let answerNumber; /*Возможное загаданное число*/
let orderNumber;/*номер вопроса*/
let gameRun; /*Игра запущена*/
let unitsText; /*Единицы*/
let tensText; /*десятки*/
let hundredsText; /*сотни*/
let answerNumberAbs; /*Модуль загаданного числа*/
let answerText; /*Текстовое представление загаданного числа*/
let answerFinal; /*Итоговый ответ*/
let answerPhrases; /*Фразы*/

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

/*Функция от 1 до 19*/
function from1to19 (answerNumber) {
    unitsText = '';
    answerNumberAbs = Math.abs(answerNumber);
    switch (answerNumberAbs) {
        case 1:
            unitsText = 'один';
        break;
        case 2:      
            unitsText = 'два';
        break;
        case 3:
            unitsText = 'три';
        break;
        case 4:
            unitsText = 'четыре';
        break;
        case 5:
            unitsText = 'пять';
        break;
        case 6:
            unitsText = 'шесть';
        break;
        case 7:
            unitsText = 'семь';
        break;
        case 8:
            unitsText = 'восемь';
        break;
        case 9:
            unitsText = 'девять';
        break;
        case 10:
            unitsText = 'десять';
        break;
        case 11:
            unitsText = 'одиннадцать';
        break;
        case 12:
            unitsText = 'двенадцать';
        break;
        case 13:
            unitsText = 'тринадцать';
        break;
        case 14:
            unitsText = 'четырнадцать';
        break;
        case 15:
            unitsText = 'пятнадцать';
        break;
        case 16:
            unitsText = 'шестнадцать';
        break;
        case 17:
            unitsText = 'семнадцать';
        break;
        case 18:
            unitsText = 'восемнадцать';
        break;
        case 19:
            unitsText = 'девятнацдцать';
        break;
        default:
            unitsText = '';
    }
    answerText = unitsText;
    return answerText;
}

/*Функция от 20 до 90*/
function from20to90 (answerNumber) {
    tensText = ''
    unitNumber = answerNumber%10; /*Вычисляет единицы в загаданном числе*/
    tensNumber = (answerNumber - unitNumber)/10; /*Вычисляет десятки в загаданном числе*/
    tensNumberAbs = Math.abs(tensNumber);
    switch (tensNumberAbs) {
        case 2:
            tensText = 'двадцать';
        break;
        case 3:
            tensText = 'тридцать';
        break;
        case 4:
            tensText = 'сорок';
        break;
        case 5:
            tensText = 'пятьдесят';
        break;
        case 6:
            tensText = 'шестьдесят';
        break;
        case 7:
            tensText = 'семьдесят';
        break;
        case 8:
            tensText = 'восемьдесят';
        break;
        case 9:
            tensText = 'девяносто';
        break;
        default:
            tensText = '';
    }
    answerText = `${tensText} ${from1to19 (unitNumber)}`; /*Прописывает десятки и единицы текстом*/
    return answerText;
}

/*Функция для сотен*/
function from100to900 (answerNumber) {
    hundredsText = '';
    unitNumber = answerNumber % 10; /*Вычисляет единицы*/
    tensNumber = (answerNumber - unitNumber) % 100;/*Вычисляет десятки*/
    hundredsNumber = (answerNumber - tensNumber - unitNumber)/100;/*Вычисляет сотни*/
    hundredsNumberAbs = Math.abs(hundredsNumber);
    switch (hundredsNumberAbs) {
        case 1:
            hundredsText = 'сто';
        break;
        case 2:
            hundredsText = 'двести';
        break;
        case 3:
            hundredsText = 'триста';
        break;
        case 4:
            hundredsText = 'четыреста';
        break;
        case 5:
            hundredsText = 'пятьсот';
        break;
        case 6:
            hundredsText = 'шестьсот';
        break;
        case 7:
            hundredsText = 'семьсот';
        break;
        case 8:
            hundredsText = 'восемьсот';
        break;
        case 9:
            hundredsText = 'девятьсот';
        break;
        default:
            hundredsText = '';
    }
    tensNumber = tensNumber + unitNumber /*Десятки + единицы*/
    
    answerText = Math.abs(tensNumber) < 20 ? `${hundredsText} ${from1to19(tensNumber)}` : `${hundredsText} ${from20to90(tensNumber)}`; /*Текстовая запись трёхзначного числа*/
    return answerText;
} 

/*Функция для текстового представления загаданного числа*/
function getAnswerNumber () {
    answerNumberAbs = Math.abs(answerNumber);
    if (answerNumber === 0) {
        answerFinal = 0;
    } else if (answerNumberAbs >0 && answerNumberAbs < 20) {
        answerFinal = from1to19 (answerNumber);
    } else if (19 < answerNumberAbs && answerNumberAbs< 100) {
        answerFinal = from20to90 (answerNumber);
    } else {
        answerFinal = from100to900 (answerNumber);
    }
    if (answerNumber < 0) { /*Для отрицательных чисел*/
        answerFinal = `минус ${answerFinal}`
    }
    if (answerFinal.length > 20) {/*Если длина текста более 20*/
        answerFinal = answerNumber;
    }
    return answerFinal
}

/*Выбор фрвзы ответа*/
function chooseAnswerRandom () {
    let answerRandom = Math.round(Math.random()**2);
    getAnswerNumber();
    switch (answerRandom) {
        case 0:
            answerPhrases = `Вы загадали число ${answerFinal}?`;
        break;
        case 1:
            answerPhrases = `Думаю, это число ${answerFinal}?`;
        break;
        case 2:
            answerPhrases = `Возможно это число ${answerFinal}?`;
        break;
        
    }
}

/*Запуск игры*/
function start () {
    orderNumber = 1;
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    minValue < -999 || isNaN(minValue) ?
        minValue = -999 :
        minValue = minValue;
    maxValue > 999 || isNaN(maxValue) ?
        maxValue = 999 : 
        maxValue = maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    chooseAnswerRandom ();
    answerField.innerText = answerPhrases;
}

start();

/*Кнопка "Заново"*/
document.getElementById('btnRetry').addEventListener('click', start);

/*Кнопка "Больше"*/
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if ((minValue === maxValue) || (minValue > maxValue)) {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  ++;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            chooseAnswerRandom ();
            answerField.innerText = answerPhrases;
        }
    }
})

/*Кнопка "Меньше"*/
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if ((minValue == maxValue) || (minValue > maxValue)){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  --;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            chooseAnswerRandom ();
            answerField.innerText = answerPhrases;
        }
    }
})

/*Кнопка "Верно"*/
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
       let answerRandom = Math.round(Math.random()**2);
            switch (answerRandom) {
                case 0:
                    answerField.innerText = `Я всегда угадываю!\n\u{1F600}`;
                    break;
                case 1:
                    answerField.innerText = `Это было легко\n\u{1F60E}`;
                    break;
                case 2:
                    answerField.innerText = `Снова угадал`;
                    break;
            }
        gameRun = false;
    }
})


