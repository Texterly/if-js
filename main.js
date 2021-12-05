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
    if (i % 3 == 0 || i % 5 == 0) {
        sum1 += i;
    }
}
console.log(sum1);

const fizzBuzz = num => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('fizzbuzz');
        } else if (i % 3 == 0) {
            console.log('fizz');
        } else if (i % 5 == 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz(11));



