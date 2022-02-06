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

// const adult = document.getElementById('adults');
// const room = document.getElementById('rooms');
// const children = document.getElementById('children');
// const filter = document.getElementById('filter');
//
// const openMenu = () => {
//     adult.onclick = function () {
//         filter.style.display = "block";
//     }
//     children.onclick = function () {
//         filter.style.display = "block";
//     }
//     room.onclick = function () {
//         filter.style.display = "block";
//     }
// }
//
// openMenu()

const filter = document.getElementById('filter');

function openHotelMenu(event) {
    if ((event.target.closest('.filter'))
        || (event.target.closest('.adults-input'))
            || (event.target.closest('.children-input'))
                || (event.target.closest('.rooms-input'))) {
        const filter = document.getElementById('filter');
        filter.style.display = 'block';
    }
    else {
        filter.style.display = 'none';
    }
}
document.body.addEventListener('click', openHotelMenu);



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

const filterAgeComment = document.querySelector('.filter-age');

// function createSelect() {
//     const selectAgeWrapper = document.createElement('div');
//     selectAgeWrapper.classList.add('select-age-wrapper');
//     const selectAge = document.createElement('select');
//     selectAge.setAttribute('name', 'children-age');
//     selectAge.classList.add('select-age');
//
//     for (let i = 0; i < 18; i++) {
//         const valueOfAge = document.createElement('option');
//         valueOfAge.setAttribute('value', `value${i} years old`);
//         valueOfAge.innerHTML = `${i} years old`;
//         if (i===8) {
//             valueOfAge.setAttribute('selected', 'selected');
//         }
//         selectAge.append(valueOfAge);
//     }
//     selectAgeWrapper.append(selectAge);
//     return selectAgeWrapper
// }
//
// const putSelect = createSelect();
// filter.append(putSelect)

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function changeCounterAdults(event) {
        if ((event.target.closest('.first-minus')) || event.target.closest('.first-plus')) {
            countAdults(event);
        }
        function countAdults(event) {
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
}

function changeCounterChildren(event) {
    if ((event.target.closest('.second-minus')) || event.target.closest('.second-plus')) {
        countChildren(event);
    }
    function countChildren(event) {
        const counterDisplayElement1 = document.querySelector('.count2');
        if ((counter2 === 0) || (counter2 <= 10)) {
            changeCounter2();
        }
        if (counter2 === -1) {
            counter2 = 0;
        }
        if (counter2 === 11) {
            counter2 = 10;
        }
        function changeCounter2 () {
            if (event.target.closest('.second-plus')) {
                counter2++;
                updateDisplay();
                const childrenSelectElement = document.createElement('select');
                childrenSelectElement.setAttribute('name', 'children-age');
                childrenSelectElement.classList.add('select-age');
                for (let year = 0; year < 18; year++) {
                    const valueOfAge = document.createElement('option');
                    valueOfAge.setAttribute('value', `value${year} years old`);
                    valueOfAge.innerHTML = `${year} years old`;
                    if (year===8) {
                        valueOfAge.setAttribute('selected', 'selected');
                    }
                    childrenSelectElement.append(valueOfAge);
                }
                filter.append(childrenSelectElement);
            }
            if (event.target.closest('.second-minus')) {
                counter2--;
                updateDisplay();
                const deletedChildSelect = document.querySelector('.select-age')
                filter.removeChild(deletedChildSelect);
            }
        }
        function updateDisplay() {
            if ((counter2 !== -1) && (counter2 !== 11)) {
                counterDisplayElement1.innerHTML = counter2;
                formLabelChildren.innerHTML = `${counter2} Children`;
                const selectNumber = counterDisplayElement1.innerHTML;

                if (selectNumber > 0) {
                    filterAgeComment.style.display = 'block';
                }
                if (selectNumber === '0') {
                    filterAgeComment.style.display = 'none';
                }
            }
        }
    }
}

function changeCounterRooms(event) {
    if ((event.target.closest('.third-minus')) || event.target.closest('.third-plus')) {
        countRooms(event);
    }
    function countRooms(event) {
        const counterDisplayElement2 = document.querySelector('.count3');
        if ((counter3 === 0) || (counter3 <= 30)) {
            changeCounter3();
        }
        if (counter3 === -1) {
            counter3 = 0;
        }
        if (counter3 === 31) {
            counter3 = 30;
        }
        function changeCounter3 () {
            if (event.target.closest('.third-plus')) {
                counter3++;
                updateDisplay();
            }
            if (event.target.closest('.third-minus')) {
                counter3--;
                updateDisplay();
            }
        }
        function updateDisplay() {
            if ((counter3 !== -1) && (counter3 !== 31)) {
                counterDisplayElement2.innerHTML = counter3;
                formLabelRooms.innerHTML = `${counter3} Rooms`;
            }
        }
    }
}

allBtns.forEach((button) => button.addEventListener('click', changeCounterAdults));
allBtns.forEach((button) => button.addEventListener('click', changeCounterChildren));
allBtns.forEach((button) => button.addEventListener('click', changeCounterRooms));


// const event = new Event('click');
// firstPlus.dispatchEvent(event);
// firstMinus.dispatchEvent(event);
// secondPlus.dispatchEvent(event);
// secondMinus.dispatchEvent(event);
// thirdPlus.dispatchEvent(event);
// thirdMinus.dispatchEvent(event);
// document.body.dispatchEvent(event);


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
