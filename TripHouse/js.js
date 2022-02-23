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

const formInputAdults = document.querySelector('.adults-input');
const formInputChildren = document.querySelector('.children-input');
const formInputRooms = document.querySelector('.rooms-input');

const filterAgeComment = document.querySelector('.filter-age');

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let searchAdults = '';
let searchAdults2;
let searchData = [];

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
                    formInputAdults.value = `${counter1} Adults`;
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
                formInputChildren.value = `${counter2} Children`;
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
                formInputRooms.value = `${counter3} Rooms`;
            }
        }
    }
}

allBtns.forEach((button) => button.addEventListener('click', changeCounterAdults));
allBtns.forEach((button) => button.addEventListener('click', changeCounterChildren));
allBtns.forEach((button) => button.addEventListener('click', changeCounterRooms));

// // lesson-12 and lesson-15
const bubbleSort = (arr, name) => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j][name] > arr[j + 1][name]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

const homesBody = document.getElementById('homes-body');
if (sessionStorage.getItem('dataSession') == null ) {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
        .then(response => response.json())
        .then(data => {
            let dataStorage = JSON.stringify(data);
            sessionStorage.setItem('dataSession', dataStorage);
        })
    const getHotels = sessionStorage.getItem('dataSession');
    const newHotel = JSON.parse(getHotels);
    const sortNewHotel = bubbleSort(newHotel, 'name');
    homesBody.innerHTML = sortNewHotel.map(i =>
        `<div class="container-blocks">
            <img src="${i.imageUrl}" alt="${i.name}">
            <p class="text">${i.name}</p>
            <p class="text-grey">${i.city}, ${i.country}</p>
            </div>`).join('');
} else {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
        .then(response => response.json())
        .then(data => {
                let dataStorage = JSON.stringify(data);
                sessionStorage.setItem('dataSession', dataStorage);
                const getHotels = sessionStorage.getItem('dataSession');
                const newHotel = JSON.parse(getHotels);
                const sortNewHotel = bubbleSort(newHotel, 'name');
                homesBody.innerHTML = sortNewHotel.map(i =>
                    `<div class="container-blocks">
            <img src="${i.imageUrl}" alt="${i.name}">
            <p class="text">${i.name}</p>
            <p class="text-grey">${i.city}, ${i.country}</p>
            </div>`).join('');
        })
        .catch(err => {
            console.log('Fetch Error :-S', err);
        });
}

// lesson-12.2 and lesson-13

const availableHotel = document.getElementById('available-hotel');
const searchButton =document.getElementById('search-button');
const availableHotelWrapper = document.getElementById('availableWrap');
const removeBlock = document.querySelector('.invisibleWrap');
let howMuchChildren;

const submitForm = () => {
    let searchChildren = '';
    const findHotel = document.querySelector('.city-input').value;
    const searchAdults = formInputAdults.value;
    let finalSearchAdults = searchAdults[0];
    const searchRooms = formInputRooms.value;
    let finalSearchRooms = searchRooms[0];
    const childrenTagSelect = document.querySelectorAll('.select-age');
    const childrenYearsArr = [];
    for (let i = 0; i < childrenTagSelect.length; i++) {
        childrenYearsArr.push(childrenTagSelect[i].options.selectedIndex);
    }
    howMuchChildren = childrenYearsArr.length;
    if ((howMuchChildren > 0) && finalSearchAdults ==0) {
        alert('Дети не могут путешествовать без взрослых')
    }
    console.log(childrenYearsArr.length)
    for (let i = 0; i < childrenYearsArr.length; i++) {
        searchChildren += `${childrenYearsArr[i]},`
    }
    const finalSearchChildren = searchChildren.slice(0, -1);
    fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${findHotel}&adults=${finalSearchAdults}&children=${finalSearchChildren}&rooms=${finalSearchRooms}`)
        .then((response) => (response.json()))
        .then((data) => {
            const availableHotelsBody = document.getElementById('available-hotel');
            availableHotelsBody.innerHTML = data.map(i =>
                `<div class="container-blocks">
                <img src="${i.imageUrl}" alt="${i.name}">
                <p class="text">${i.name}</p>
                <p class="text-grey">${i.city}, ${i.country}</p>
                </div>`).join('');
                removeBlock.style.display = 'block';
        })
        .catch(err => {
            console.log('Fetch Error :-S', err);
        });
}
searchButton.addEventListener('click', submitForm);

const homes = document.querySelector('#homes-body');
console.log(homes)
let offset = 0;
const leftArrow = document.querySelector('.arrow');
console.log(leftArrow)
leftArrow.addEventListener('click', function () {
    offset += 400;
    homes.style.left = offset + 'px';
});

// document.querySelector('.arrow-left').addEventListener('click', function () {
//     offset += 400;
//     homes.style.left = -offset + 'px';
// });
