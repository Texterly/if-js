// lesson-10

const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];

const homesGroupItems = document.getElementsByClassName('homes');

function createHomeItems (data, index) {
    const containerBlocks = document.createElement('div');
    containerBlocks.classList.add('container-blocks', 'col-6', 'col-s-12');
    const containerBlocksImg = document.createElement('img');
    containerBlocksImg.setAttribute('src', data[index].imageUrl);
    containerBlocksImg.setAttribute('alt', data[index].name);
    containerBlocks.append(containerBlocksImg);
    const containerBlocksTitle = document.createElement('p');
    containerBlocksTitle.classList.add('text');
    let containerBlocksTitleText = document.createTextNode(data[index].name);
    containerBlocksTitle.appendChild(containerBlocksTitleText);
    containerBlocks.append(containerBlocksTitle);
    const containerBlocksLocation = document.createElement('p');
    containerBlocksLocation.classList.add('text-grey');
    let containerBlocksLocationText = document.createTextNode(`${data[index].city}, ${data[index].country}`);
    containerBlocksLocation.appendChild(containerBlocksLocationText);
    containerBlocks.append(containerBlocksLocation);
    return containerBlocks;
}

function insertBlocksItem (blocksCreated) {
    homesGroupItems.append(blocksCreated);
}

function createBlocksItems() {
    for (let i=0; i<data.length; i++) {
        let blocksCreated = createHomeItems(data,i);
        insertBlocksItem(blocksCreated);
    }
}

createBlocksItems();
