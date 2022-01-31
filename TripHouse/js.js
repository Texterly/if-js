// // lesson-10
//
// const data = [
//     {
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
//     },
//     {
//         name: 'Apartment Sunshine',
//         city: 'Santa  Cruz de Tenerife',
//         country: 'Spain',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
//     },
//     {
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
//     },
//     {
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
//     },
//     {
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
//     },
//     {
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
//     },
//     {
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
//     },
//     {
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
//     },
// ];
//
// const homesBody = document.getElementById('homes-body');
//
// homesBody.innerHTML = data.map(i =>
//     `<div class="container-blocks">
//     <img src="${i.imageUrl}" alt="${i.name}">
//     <p class="text">${i.name}</p>
//     <p class="text-grey">${i.city}, ${i.country}</p>
// </div>`).join('');

// lesson-11

const adult = document.getElementById('adults');
const room = document.getElementById('rooms');
const children = document.getElementById('children');
const filter = document.getElementById('filter');

adult.onclick = function () {
    filter.style.display = "block";
}
children.onclick = function () {
    filter.style.display = "block";
}
room.onclick = function () {
    filter.style.display = "block";
}

// let count = document.getElementById('count1').innerHTML;
//
// const minus = document.getElementById('minus');
// const plus = document.getElementsByClassName('plus');
//
// plus.onclick = function () {
//     document.getElementById('count1').innerText++ ;
// }
//
// minus.onclick = function () {
//     document.getElementById('count1').innerText--;
// }


// const countPlus = () => {
//     count++;
//     console.log(count)
// }
// const countMinus = () => count--;
// plus.addEventListener('click', countPlus())
// minus.addEventListener('click', countMinus())
// console.log(count)

// let count = document.getElementById('count1');
// let countText = document.getElementById('count1').innerHTML;
// console.log(count.value)
// console.log(countText)
//
//
// const minus = document.getElementById('minus');
// const plus = document.getElementById('plus');
//
// minus.addEventListener('click', () => {
//     countText--;
// })
//
// plus.addEventListener('click', () => {
//     countText++ ;
// })

// вариант 1
const allBtns = document.querySelectorAll('.btn-filter');

const firstMinus = document.querySelector('.first-minus');
const firstPlus = document.querySelector('.first-plus');
const secondMinus = document.querySelector('.second-minus');
const secondPlus = document.querySelector('.second-plus');
const thirdMinus = document.querySelector('.third-minus');
const thirdPlus =document.querySelector('.third-plus');

const formLabelAdults = document.querySelector('.adults-label');
const formLabelChildren = document.querySelector('.children-label');
const formLabelRooms = document.querySelector('.rooms-label');

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function changeCounterAdults(event) {
    console.log(event.target)
    // if (event.target.classList.contains('btn-filter')) {
        if ((event.target.closest('.first-minus')) || event.target.closest('.first-plus')) {
            countAdults(event);
        }
        function countAdults(event) {
            console.log(counter1)
            const counterDisplayElement = document.querySelector('.count1');
            if ((counter1 === 0) || (counter1 <= 30)) {
                changeCounter1();
            }
            if (counter1 === -1) {
                counter1 = 0;
            }
            if (counter1 === 31) {
                counter1 = 30;
            }
            function changeCounter1 () {
                if (event.target.closest('.first-plus')) {
                    counter1++;
                    updateDisplay();
                }
                if (event.target.closest('.first-minus')) {
                    counter1--;
                    updateDisplay();
                }
            }
            function updateDisplay() {
                if ((counter1 !== -1) && (counter1 !== 31)) {
                    counterDisplayElement.innerHTML = counter1;
                    formLabelAdults.innerHTML = `${counter1} Adults`;
                }
            }
        }
    // }
}

allBtns.forEach((button) => button.addEventListener('click', changeCounterAdults));

// const event = new Event('click');
// firstPlus.dispatchEvent(event);
// firstMinus.dispatchEvent(event);
// secondPlus.dispatchEvent(event);
// secondMinus.dispatchEvent(event);
// thirdPlus.dispatchEvent(event);
// thirdMinus.dispatchEvent(event);
// document.body.dispatchEvent(event);

// // вариант 2
//
// const formLabelAdults = document.querySelector('.adults-label');
// const formLabelChildren = document.querySelector('.children-label');
// const formLabelRooms = document.querySelector('.rooms-label');
//
// const minusBtns = document.querySelectorAll('.minus');
// const plusBtns = document.querySelectorAll('.plus');
// const counterDisplayElement1 = document.querySelector('.count1');
// const counterDisplayElement2 = document.querySelector('.count2');
// const counterDisplayElement3 = document.querySelector('.count3');
//
// minusBtns[0].addEventListener('click', () => {
//     if (counterDisplayElement1.textContent !==`${0}`) {
//         counterDisplayElement1.textContent = `${counterDisplayElement1.textContent - 1}`;
//     }
//
//     // if (counterDisplayElement1.textContent === `${0}`) {
//     //     minusBtns[0].style.backgroundColor = '#CECECE';
//     // }
//     // if (counterDisplayElement1.textContent !==`${30}`) {
//     //     plusBtns[0].style.backgroundColor = '#3077C6';
//     // }
//     formLabelAdults.textContent = `${counterDisplayElement1.textContent} Adults`
// })
// // minusBtns[1].addEventListener('click', () => {
// //     if (counterDisplayElement.textContent !==`${0}`) {
// //         counterDisplayElement.textContent = `${counterDisplayElement - 1}`;
// //     }
// //
// //     if (counterDisplayElement.textContent === `${0}`) {
// //         minusBtns[1].style.color = '#CECECE';
// //     }
// //     if (counterDisplayElement.textContent !==`${30}`) {
// //         plusBtns[1].style.color = '#3077C6';
// //     }
// //     formLabelChildren.textContent = `${counterDisplayElement.textContent} Children`
// // })
// // minusBtns[2].addEventListener('click', () => {
// //     if (counterDisplayElement.textContent !==`${0}`) {
// //         counterDisplayElement.textContent = `${counterDisplayElement - 1}`;
// //     }
// //
// //     if (counterDisplayElement.textContent === `${0}`) {
// //         minusBtns[2].style.color = '#CECECE';
// //     }
// //     if (counterDisplayElement.textContent !==`${30}`) {
// //         plusBtns[2].style.color = '#3077C6';
// //     }
// //     formLabelRooms.textContent = `${counterDisplayElement.textContent} Rooms`
// // })
//
// plusBtns[0].addEventListener('click', () => {
//     if ((Number(counterDisplayElement1.textContent) <=`${30}`) || (counterDisplayElement1.textContent ===`${0}`) ) {
//         counterDisplayElement1.textContent++;
//     }
//
//     // if (counterDisplayElement1.textContent === `${30}`) {
//     //     minusBtns[0].style.backgroundColor = '#CECECE';
//     // }
//     // if (counterDisplayElement1.textContent !==`${30}`) {
//     //     plusBtns[0].style.backgroundColor = '#3077C6';
//     // }
//     formLabelAdults.textContent = `${counterDisplayElement1.textContent} Adults`
// })
// console.log(counterDisplayElement1.textContent)

// // lesson-12
const homesBody = document.getElementById('homes-body');

fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then(response => response.json())
    .then(data => {
        homesBody.innerHTML = data.map(i =>
            `<div class="container-blocks">
            <img src="${i.imageUrl}" alt="${i.name}">
            <p class="text">${i.name}</p>
            <p class="text-grey">${i.city}, ${i.country}</p>
            </div>`).join('');
    })
    .catch(err => {
        console.log('Fetch Error :-S', err);
    });

