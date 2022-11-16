let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
minValue < -999 || isNaN(minValue) ?
        minValue = -999 :
        minValue = minValue;
maxValue > 999 || isNaN(maxValue) ?
    maxValue = 999 : 
    maxValue = maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
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
    answerField.innerText = `Вы загадали число ${answerNumber }?`
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let answerRandom = Math.round(Math.random()**2);
            switch (answerRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                    break;
                case 1:
                    answerField.innerText = `Думаю, это число ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Возможно это число ${answerNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue == maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            let answerRandom = Math.round(Math.random()**2);
            switch (answerRandom) {
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`;
                    break;
                case 1:
                    answerField.innerText = `Думаю, это число ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Возможно, это число ${answerNumber }?`;
                    break;
            }
        }
    }
})

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


