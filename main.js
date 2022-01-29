// let user = 'JonhDoe';
// console.log(user);
//
// let student = 'Pavel';
// console.log(student);
//
// user = student;
// // переменной user будет присвоено значение Pavel
// console.log(user);
//
// let test = 1;
// test += '1';
// // при сложении строки и числа в итоге получится строка ('11')
// console.log(test);
// test -= 1;
// // при вычитании из строки числа в результате будет разница между двумя числами (10)
// console.log(test);
// //при приведении числа к типу boolean результат будет true (true)
// console.log(Boolean(test));
//
// let arr = [2, 3, 5, 8];
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//     sum *= arr[i];
// }
// console.log(sum);
//
// let arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > 5 && arr1[i] < 10) {
//         console.log(arr1[i]);
//     }
// }
//
// let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//         console.log(arr2[i]);
//     }
// }
//
// /*
// Числа, кратные 3 или 5
// Если выписать все натуральные числа меньше 10, кратные 3 или 5,
// то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.
// */
//
// let n = 0;
// let m = 1000;
// let sum1 = 0;
// for (let i = n; i < m; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum1 += i;
//     }
// }
// console.log(sum1);
//
// const fizzBuzz = num => {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         } else if (i % 3 === 0) {
//             console.log('fizz');
//         } else if (i % 5 === 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// console.log(fizzBuzz(11));
//
// // Палиндром
// function palindrome(str) {
//     str = str.toUpperCase().replace(/\s/g, '');
//     if (str.length === 1) {
//         return true;
//     }
//     if (str.length === 2) {
//         return str[0] === str[1];
//     }
//     if (str[0] === str.slice(-1)) {
//         return palindrome3(str.slice(1, -1));
//     }
//         return false;
// }
// console.log(palindrome('Шалаш'));
//
// // Наибольшее
// function max (arr){
//     let max = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// console.log(max([1, 4, 7, 8, 12, 3, 9]))
// //
// // // Наименьшее
// function min (arr){
//     let min = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return min;
// }
//
// console.log(min([1, 4, 7, 8, 12, 3, 9]))
//
// // Наибольшее через тернарный оператор
// function maxValue (arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         max = arr[i] > max ? max = arr[i] : max;
//     }
//     return max;
// }
// console.log(maxValue([1, 4, 7, 8, 12, 3, 9]))
//
// // Замена элементов массива:
// //     создайте массив с десятью случайными элементами от 0 до 100;
// // напишите функцию, которая будет заменять все 0 на строку 'zero';
// // выведите полученный массив в консоль (пример: [12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1])
//
// function randomArray(count, min, max) {
//     if (count > (max - min)) return;
//     let arr = [];
//     let num;
//
//     for (i = 0; i < count; count--) {
//         num = Math.floor(Math.random() * (max - min) + min);
//         if (arr.indexOf(num) === -1) {
//             arr.push(num);
//         }
//     }
//     return arr;
// }
// console.log(randomArray(10, 1, 100).join().replaceAll(0, 'zero').split());
//
// // Фибоначчи
// const fibonacci = num => {
//     const result = [0, 1];
//
//     for (let i = 2; i < num; i++ ) {
//         const prevNum1 = result[i-1];
//         const prevNum2 = result[i-2];
//         result.push(prevNum1+prevNum2);
//     }
//     return result;
// }
//
// console.log(fibonacci(10));
//
// const fibonacci1 = num => {
//     if (num < 2) {
//         return num
//     }
//     return fibonacci1(num-1) + fibonacci1(num-2);
// }
// console.log(fibonacci1(10));
//
// // сделать значения в массиве уникальными
// const result = [1, 2, 2, 3, 3, 3, 3].reduce((x, y) => x.includes(y) ? x : [...x, y], []);
//
// console.log(result);
//
// // lesson-4
// //
// // Напишите функцию sum, которая возвращает сумму чисел следующим образом:
// //     console.log(sum(5)(2)); // 7
//
// function curry (f) {
//     return function (a) {
//         return function (b) {
//             return f (a, b);
//         }
//     }
// }
//
// function newSum (a, b) {
//     return a + b;
// }
//
// let sum = curry (newSum);
// console.log(sum(5)(2)); // 7
//
// module.exports = newSum;
//
// // Покрасьте абзацы по клику (событие click):
// // даны 3 абзаца:
// //     <p id="text1">Text 1</p>
// // <p id="text2">Text 2</p>
// // <p id="text3">Text 3</p>
// // дан массив цветов:
// //     const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// // по первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
// // цвета из массива меняются бесконечно;
// // все абзацы работают независимо.
//
// /*
// rotate array
// Rotate an array of n elements to the right by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7]
// is rotated to [5,6,7,1,2,3,4]. How many different ways do you know
// to solve this problem?
//  */
// 1-й способ
// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array);
//
// const rotateArray = (randomArray, k) => {
//     for (let i = 0; i < k; i++) {
//         randomArray.unshift(randomArray.pop());
//     }
//     return randomArray;
// }
// console.log(rotateArray(array,3));
//
// module.exports = rotateArray;
//
//
// // 2-й способ
// let n = 7;
// let k = 13;
// let initialArray = [];
// for (let i = 1; i <= n; i++) {
//     initialArray.push(i);
// }
// console.log("Первоначальный массив: " + initialArray);
// let count = k - (n * Math.trunc(k / n));
// arrRotate = initialArray.splice(initialArray.length - count, count);
// initialArray.unshift(...arrRotate);
// console.log("Полученный массив: " + initialArray);
//
// // lesson-5
//
// // Преобразование формата даты:
// //     в переменной date лежит дата в формате '2020-11-26';
// // преобразуйте эту дату в формат '26.11.2020';
// // функция должна быть универсальной, т.е. принимать любую дату и приводить ее к поставленному в задании формату.
//
// let date = `2020-11-26`;
//
// function rotateDate () {
//     date = date.split(`-`).reverse().join(`.`);
//     return date;
// }
// console.log(rotateDate(date))
//
// module.exports = rotateDate;
//
// // Поиск объектов размещения:
// //     дан массив;
// // напишите функцию поиска, которая будет принимать строку;
// // по полученной строке найдите все совпадения в массива;
// // верните список строк в формате: страна, город, отель.
//
// const data = [
//     {
//         country: 'Russia',
//         city: 'Saint Petersburg',
//         hotel: 'Hotel Leopold',
//     },
//     {
//         country: 'Spain',
//         city: 'Santa Cruz de Tenerife',
//         hotel: 'Apartment Sunshine',
//     },
//     {
//         country: 'Slowakia',
//         city: 'Vysokie Tatry',
//         hotel: 'Villa Kunerad',
//     },
//     {
//         country: 'Germany',
//         city: 'Berlin',
//         hotel: 'Hostel Friendship',
//     },
//     {
//         country: 'Indonesia',
//         city: 'Bali',
//         hotel: 'Ubud Bali Resort&SPA',
//     },
//     {
//         country: 'Netherlands',
//         city: 'Rotterdam',
//         hotel: 'King Kong Hostel',
//     },
//     {
//         country: 'Marocco',
//         city: 'Ourika',
//         hotel: 'Rokoko Hotel',
//     },
//     {
//         country: 'Germany',
//         city: 'Berlin',
//         hotel: 'Hotel Rehberge Berlin Mitte',
//     },
// ];
//
// let array = [];
// let str;
// let n;
// function search (string) {
//     for (let i = 0; i < data.length; i++) {
//         str = Object.values(data[i]);
//         n = str.includes(string);
//         if (n === true) {
//             array = data[i];
//             console.log(Object.values(array));
//         }
//     }
// }
//
// search('Germany')
//
// // lesson-6
//
// Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково. Прим "шалаш".):
// создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того, является ли переданное функции слово палиндромом или нет;
// теперь уже зная как работать со строками и массивами запишите реализацию этого метода в одну строку.

// function palindrom (str) {
//     str = str.toUpperCase();
//     return str === str.split('').reverse().join('');
// }
// console.log(palindrom('Шалаш'))
//
// module.exports = palindrom;
//
// // Поиск объектов размещения:
// //     дан массив;
// // напишите функцию поиска, которая будет принимать строку;
// // по полученной строке найдите все совпадения в массиве по любому из полей;
// // верните масиив строк в формате: страна, город, отель;
// // зная как работать с массивами, сократите вашу функцию избавившись от цикла for.
// //
// const hotels = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa Cruz de Tenerife',
//         country: 'Spain',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Virgin Hotel',
//         city: 'Chicago',
//         country: 'USA',
//     },
//     {
//         name: 'Grand Beach Resort',
//         city: 'Dubai',
//         country: 'United Arab Emirates',
//     },
//     {
//         name: 'Shilla Stay',
//         city: 'Seoul',
//         country: 'South Korea',
//     },
//     {
//         name: 'San Firenze Suites',
//         city: 'Florence',
//         country: 'Italy',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Black Penny Villas',
//         city: 'BTDC, Nuca Dua',
//         country: 'Indonesia',
//     },
//     {
//         name: 'Koko Hotel',
//         city: 'Tokyo',
//         country: 'Japan',
//     },
//     {
//         name: 'Ramada Plaza',
//         city: 'Istanbul',
//         country: 'Turkey',
//     },
//     {
//         name: 'Waikiki Resort Hotel',
//         city: 'Hawaii',
//         country: 'USA',
//     },
//     {
//         name: 'Puro Hotel',
//         city: 'Krakow',
//         country: 'Poland',
//     },
//     {
//         name: 'Asma Suites',
//         city: 'Santorini',
//         country: 'Greece',
//     },
//     {
//         name: 'Cityden Apartments',
//         city: 'Amsterdam',
//         country: 'Netherlands',
//     },
//     {
//         name: 'Mandarin Oriental',
//         city: 'Miami',
//         country: 'USA',
//     },
//     {
//         name: 'Concept Terrace Hotel',
//         city: 'Rome',
//         country: 'Italy',
//     },
//     {
//         name: 'Ponta Mar Hotel',
//         city: 'Fortaleza',
//         country: 'Brazil',
//     },
//     {
//         name: 'Four Seasons Hotel',
//         city: 'Sydney',
//         country: 'Australia',
//     },
//     {
//         name: 'Le Meridien',
//         city: 'Nice',
//         country: 'France',
//     },
//     {
//         name: 'Apart Neptun',
//         city: 'Gdansk',
//         country: 'Poland',
//     },
//     {
//         name: 'Lux Isla',
//         city: 'Ibiza',
//         country: 'Spain',
//     },
//     {
//         name: 'Nox Hostel',
//         city: 'London',
//         country: 'UK',
//     },
//     {
//         name: 'Leonardo Vienna',
//         city: 'Vienna',
//         country: 'Austria',
//     },
//     {
//         name: 'Adagio Aparthotel',
//         city: 'Edinburgh',
//         country: 'UK',
//     },
//     {
//         name: 'Steigenberger Hotel',
//         city: 'Hamburg',
//         country: 'Germany',
//     },
// ];
//
// function getSearchHotel(str, data) {
//     const reg = new RegExp(str, 'i')
//     return data
//         .filter(hotel => reg.test(hotel.name + hotel.city + hotel.country))
//         .map(hotel => `${hotel.country}, ${hotel.city}, ${hotel.name}`);
// }
//
// console.log(getSearchHotel("germa", hotels));
//
// // Сопоставьте страны с городами из массива:
// //     дан массив;
// // напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
//
// const hotels2 = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa Cruz de Tenerife',
//         country: 'Spain',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Virgin Hotel',
//         city: 'Chicago',
//         country: 'USA',
//     },
//     {
//         name: 'Grand Beach Resort',
//         city: 'Dubai',
//         country: 'United Arab Emirates',
//     },
//     {
//         name: 'Shilla Stay',
//         city: 'Seoul',
//         country: 'South Korea',
//     },
//     {
//         name: 'San Firenze Suites',
//         city: 'Florence',
//         country: 'Italy',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//     },
//     {
//         name: 'Black Penny Villas',
//         city: 'BTDC, Nuca Dua',
//         country: 'Indonesia',
//     },
//     {
//         name: 'Koko Hotel',
//         city: 'Tokyo',
//         country: 'Japan',
//     },
//     {
//         name: 'Ramada Plaza',
//         city: 'Istanbul',
//         country: 'Turkey',
//     },
//     {
//         name: 'Waikiki Resort Hotel',
//         city: 'Hawaii',
//         country: 'USA',
//     },
//     {
//         name: 'Puro Hotel',
//         city: 'Krakow',
//         country: 'Poland',
//     },
//     {
//         name: 'Asma Suites',
//         city: 'Santorini',
//         country: 'Greece',
//     },
//     {
//         name: 'Cityden Apartments',
//         city: 'Amsterdam',
//         country: 'Netherlands',
//     },
//     {
//         name: 'Mandarin Oriental',
//         city: 'Miami',
//         country: 'USA',
//     },
//     {
//         name: 'Concept Terrace Hotel',
//         city: 'Rome',
//         country: 'Italy',
//     },
//     {
//         name: 'Ponta Mar Hotel',
//         city: 'Fortaleza',
//         country: 'Brazil',
//     },
//     {
//         name: 'Four Seasons Hotel',
//         city: 'Sydney',
//         country: 'Australia',
//     },
//     {
//         name: 'Le Meridien',
//         city: 'Nice',
//         country: 'France',
//     },
//     {
//         name: 'Apart Neptun',
//         city: 'Gdansk',
//         country: 'Poland',
//     },
//     {
//         name: 'Lux Isla',
//         city: 'Ibiza',
//         country: 'Spain',
//     },
//     {
//         name: 'Nox Hostel',
//         city: 'London',
//         country: 'UK',
//     },
//     {
//         name: 'Leonardo Vienna',
//         city: 'Vienna',
//         country: 'Austria',
//     },
//     {
//         name: 'Adagio Aparthotel',
//         city: 'Edinburgh',
//         country: 'UK',
//     },
//     {
//         name: 'Steigenberger Hotel',
//         city: 'Hamburg',
//         country: 'Germany',
//     },
// ];
//
// const searchCountries = {};
//
// hotels2.forEach(el => {
//     if (searchCountries[el.country] && !searchCountries[el.country].includes(el.city)) {
//         searchCountries[el.country].push(el.city);
//     } else {
//         searchCountries[el.country] = [el.city];
//     }
// })
//
// console.log(searchCountries);

// lesson-7
//
// Напишите функция deepEqual, которая сможет сравнивать 2 объекта с разными уровнями вложенности.

// const obj1 = {
//     a: 'a',
//     b: {
//         a: 'a',
//         b: 'b',
//         c: {
//             a: 1,
//         },
//     },
// };
// const obj2 = {
//     b: {
//         c: {
//             a: 1,
//         },
//         b: 'b',
//         a: 'a',
//     },
//     a: 'a',
// };
// const obj3 = {
//     a: {
//         c: {
//             a: 'a',
//         },
//         b: 'b',
//         a: 'a',
//     },
//     b: 'b',
// };
//
// const deepEqual = (object1, object2) => {
//     if (object1 === null || object2 === null || typeof(object1) !== "object" || typeof(object2) !== "object") {
//         return false;
//     }
//     const prop1 = Object.keys(object1);
//     const prop2 = Object.keys(object2);
//     if (prop1.length !== prop2.length) {
//         return false;
//     }
//     for (let i = 0; i < prop1.length; i++) {
//         const prop = prop1[i];
//         const bothObject = typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object';
//
//         if ((!bothObject && (object1[prop] !== object2[prop]))
//             || (bothObject && !deepEqual(object1[prop], object2[prop]))) {
//             return false
//         }
//     }
//     return true;
// }
//
// console.log(deepEqual(obj1, obj2)); // true
// console.log(deepEqual(obj1, obj3)); // false
//
// module.exports = deepEqual;
//
// // создайте функцию getCalendarMonth, которая принимает количество дней в месяце, количество дней в неделе и день недели, на который выпадает первый день месяца;
// // свободные дни (до первого дня месяца и после последнего дня месяца, пока считаем, что в каждом месяце равное количество дней) заполните днями предыдущего месяца или последующего;
// // выбросьте ошибку, если переданный день недели больше, чем количество дней.
// //
// const result = [];
// // const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);
// function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
//     let weekInMonth = Math.ceil(daysInMonth/daysInWeek - 1);
//     if (daysInMonth === 28) {
//         weekInMonth = 5;
//     }
//     const arrDays = []  ;
//     for (let i = 1; i <= daysInMonth; i++) {
//         arrDays.push(String(i))
//     }
//     for (let i = 0; i < dayOfWeek; i++) {
//         arrDays.unshift(arrDays.pop());
//     }
//     for (let i = 0; i < Math.ceil(arrDays.length/daysInWeek); i++) {
//         result.push(arrDays.slice(i*daysInWeek, (i*daysInWeek) + daysInWeek));
//     }
//     for (let i = 0; i <= dayOfWeek; i++) {
//         result[weekInMonth].push(arrDays[i])
//     }
//     return result
// }
//
// console.log(getCalendarMonth(29,7,5))

// // lesson-8

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
//
// class Student extends User {
//     constructor({firstName, lastName, admissionYear, courseName}) {
//         super(firstName, lastName);
//         this.admissionYear = admissionYear;
//         this.courseName = courseName;
//     }
//
//     get fullName() {
//         return super.fullName;
//     }
//
//     get course() {
//         const currentYear = new Date().getFullYear();
//         return `${currentYear - this.admissionYear}`;
//     }
// }
//
// class Students {
//     constructor(students) {
//         this.students = students;
//     }
//
//     sortByCourse = () => this.students.sort((a,b) => a.course - b.course);
//
//     getInfo() {
//         return this.students.forEach((student) => {
//             console.log(
//             `${student.fullName} - ${student.courseName}, ${student.course}`
//             );
//         });
//     }
// }
// const studentsData = [
//     {
//         firstName: 'Василий',
//         lastName: 'Петров',
//         admissionYear: 2019,
//         courseName: 'Java',
//     },
//     {
//         firstName: 'Иван',
//         lastName: 'Иванов',
//         admissionYear: 2018,
//         courseName: 'JavaScript',
//     },
//     {
//         firstName: 'Александр',
//         lastName: 'Федоров',
//         admissionYear: 2017,
//         courseName: 'Python',
//     },
//     {
//         firstName: 'Николай',
//         lastName: 'Петров',
//         admissionYear: 2019,
//         courseName: 'Android',
//     }
// ];
//
// const studentInstances = studentsData.map((student) => new Student(student));
// const students = new Students(studentInstances);
// students.sortByCourse();
// students.getInfo();
//
// Задача1
// let arr = [5, 3, 8, 1];
//
//
// function filterRange(arr, a, b) {
//     return arr.filter(item => a <= item && b >= item);
// };
//
// let filtered = filterRange(arr, 1, 4);
//
// console.log( filtered ); // 3,1 (совпадающие значения)
//
// console.log( arr ); // 5,3,8,1 (без изменений)

// // Задача2
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map(item => item.name)
//
//     console.log( names ); // Вася, Петя, Маша

// // Задача3
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(user => ({
//     fullname: `${user.name} ${user.surname}`,
//     id: user.id
// }));
//
// console.log(usersMapped)
// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullname );

// // Задача4
// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge(arr);
//
// // теперь отсортировано: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// Задача5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
