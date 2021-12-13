let user = 'JonhDoe';
console.log(user);

let student = 'Pavel';
console.log(student);

user = student;
// переменной user будет присвоено значение Pavel
console.log(user);

let test = 1;
test += '1';
// при сложении строки и числа в итоге получится строка ('11')
console.log(test);
test -= 1;
// при вычитании из строки числа в результате будет разница между двумя числами (10)
console.log(test);
//при приведении числа к типу boolean результат будет true (true)
console.log(Boolean(test));

let arr = [2, 3, 5, 8];
let sum = 1;
for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
}
console.log(sum);

let arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 5 && arr1[i] < 10) {
        console.log(arr1[i]);
    }
}

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        console.log(arr2[i]);
    }
}

/*
Числа, кратные 3 или 5
Если выписать все натуральные числа меньше 10, кратные 3 или 5,
то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
*/

let n = 0;
let m = 1000;
let sum1 = 0;
for (let i = n; i < m; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum1 += i;
    }
}
console.log(sum1);

const fizzBuzz = num => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}
console.log(fizzBuzz(11));

// Палиндром
function palindrome(str) {
    str = str.toUpperCase().replace(/\s/g, '');
    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return str[0] === str[1];
    }
    if (str[0] === str.slice(-1)) {
        return palindrome3(str.slice(1, -1));
    }
        return false;
}
console.log(palindrome('Шалаш'));

// Наибольшее
function max (arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(max([1, 4, 7, 8, 12, 3, 9]))
//
// // Наименьшее
function min (arr){
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

console.log(min([1, 4, 7, 8, 12, 3, 9]))

// Наибольшее через тернарный оператор
function maxValue (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max = arr[i] > max ? max = arr[i] : max;
    }
    return max;
}
console.log(maxValue([1, 4, 7, 8, 12, 3, 9]))

// Замена элементов массива:
//     создайте массив с десятью случайными элементами от 0 до 100;
// напишите функцию, которая будет заменять все 0 на строку 'zero';
// выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1])

function randomArray(count, min, max) {
    if (count > (max - min)) return;
    let arr = [];
    let num;

    for (i = 0; i < count; count--) {
        num = Math.floor(Math.random() * (max - min) + min);
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        }
    }
    return arr;
}
console.log(randomArray(10, 1, 100).join().replaceAll(0, 'zero').split());

// Фибоначчи
const fibonacci = num => {
    const result = [0, 1];

    for (let i = 2; i < num; i++ ) {
        const prevNum1 = result[i-1];
        const prevNum2 = result[i-2];
        result.push(prevNum1+prevNum2);
    }
    return result;
}

console.log(fibonacci(10));

const fibonacci1 = num => {
    if (num < 2) {
        return num
    }
    return fibonacci1(num-1) + fibonacci1(num-2);
}
console.log(fibonacci1(10));

// сделать значения в массиве уникальными
const result = [1, 2, 2, 3, 3, 3, 3].reduce((x, y) => x.includes(y) ? x : [...x, y], []);

console.log(result);

// lesson-4
//
// Напишите функцию sum, которая возвращает сумму чисел следующим образом:
//     console.log(sum(5)(2)); // 7

function curry (f) {
    return function (a) {
        return function (b) {
            return f (a, b);
        }
    }
}

function newSum (a, b) {
    return a + b;
}

let sum = curry (newSum);
console.log(sum(5)(2)); // 7

// Покрасьте абзацы по клику (событие click):
// даны 3 абзаца:
//     <p id="text1">Text 1</p>
// <p id="text2">Text 2</p>
// <p id="text3">Text 3</p>
// дан массив цветов:
//     const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
// цвета из массива меняются бесконечно;
// все абзацы работают независимо.

/*
rotate array
Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7]
is rotated to [5,6,7,1,2,3,4]. How many different ways do you know
to solve this problem?
 */

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

const rotateArray = (randomArray, k) => {
    for (let i = 0; i < k; i++) {
        randomArray.unshift(randomArray.pop());
    }
    return randomArray;
}
console.log(rotateArray(array,3));