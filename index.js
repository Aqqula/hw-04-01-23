// Є дві змінні, якщо вони з однаковим знаком - то перемножити і вивести результат 
// якщо з різними знаками - то поділити і вивести результат,
// якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат,
// якщо обидва нулі - то покласти в результат NaN і вивести результат.


const num1 = -6;
const num2 = -2;

let result;

if (num1 !== 0 && num2 !== 0){
    if (num1 * num2 > 0) {          //або ((num1 > 0 && num2 >0) || 
        result = num1 * num2;       // (num1 < 0 && num2 < 0))
    }else {
        result = num1 / num2;
    }
}else {
    if (num1 === 0 && num2 === 0){
        result = NaN;
    } else if (num1 === 0){
        result = num2;
    } else {
        result = num1;
    }
}
console.log(result);


//Якщо число додатнє, парне, кратне 3 і 6 одночасно - вивести win, інакше - lose.
//Першим обробляти варіант з lose.

//varian 1
const number = 9;
if (number < 0 || number % 2 || (number % 3 && number % 6)){
    console.log('lose');
}else {
    console.log('win');
}

//variant 2
// const number = 12;
// if (number > 0 && number % 2 === 0 && number % 3 === 0 && number % 6 === 0) {
//     console.log('win');
// }else {
//     console.log('lose');
// }