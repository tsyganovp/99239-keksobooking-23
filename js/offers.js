import { createOffers } from './data.js';


const OFFER_TEMPLATE = document.querySelector('#card').content; // находим содержимое шаблона
const OFFER_CARD = OFFER_TEMPLATE.querySelector('.popup'); // находим объявление 
const FRAGMENT = document.createDocumentFragment();
const MAP_CANVAS = document.querySelector('#map-canvas');
const ADVERTISEMENTS = createOffers();
const OFFER_ELEMENT = OFFER_CARD.cloneNode(true);
const TEMPLATE_TITLE = OFFER_ELEMENT.querySelector('.popup__title');
const TEMPLATE_ADDRESS = OFFER_ELEMENT.querySelector('.popup__text--address');
const TEMPLATE_PRICE = OFFER_ELEMENT.querySelector('.popup__text--price');
const TEMPLATE_TYPE = OFFER_ELEMENT.querySelector('.popup__type');
const TEMPLATE_GUESTS = OFFER_ELEMENT.querySelector('.popup__text--capacity');
const TEMPLATE_TIME = OFFER_ELEMENT.querySelector('.popup__text--time');
const TEMPLATE_FEATURES = OFFER_ELEMENT.querySelector('.popup__features');
const TEMPLATE_DESCRIPTION = OFFER_ELEMENT.querySelector('.popup__description');
const TEMPLATE_PHOTO = OFFER_ELEMENT.querySelector('.popup__photo');
const TEMPLATE_AVATAR = OFFER_ELEMENT.querySelector('.popup__avatar');

const OFFER_TITLE = ADVERTISEMENTS[0].offer.title;
const OFFER_ADDRESS = ADVERTISEMENTS[0].offer.address;
const OFFER_PRICE = ADVERTISEMENTS[0].offer.price + ' ₽/ночь';
const OFFER_TYPE = ADVERTISEMENTS[0].offer.type;
const OFFER_ROOMS = ADVERTISEMENTS[0].offer.rooms;
const OFFER_GUESTS = ADVERTISEMENTS[0].offer.guests;
const OFFER_CHECKIN = ADVERTISEMENTS[0].offer.checkin;
const OFFER_CHECKOUT = ADVERTISEMENTS[0].offer.checkout;
const OFFER_FEATURES = ADVERTISEMENTS[0].offer.features;
const OFFER_DESCRIPTION = ADVERTISEMENTS[0].offer.description;
const OFFER_PHOTOS = ADVERTISEMENTS[0].offer.photos[0];
const AVATAR = ADVERTISEMENTS[0].author.avatar;

if (!OFFER_TITLE) {
    TEMPLATE_TITLE.textContent = null;
} else {
    TEMPLATE_TITLE.textContent = OFFER_TITLE;
}

if (!OFFER_ADDRESS) {
    TEMPLATE_ADDRESS.textContent = null;
} else {
    TEMPLATE_ADDRESS.textContent = OFFER_ADDRESS;
}

if (!OFFER_PRICE) {
    TEMPLATE_PRICE.textContent = null;
} else {
    TEMPLATE_PRICE.textContent = OFFER_PRICE;
}

switch (OFFER_TYPE) {
    case 'flat':
        TEMPLATE_TYPE.textContent = 'Квартира';
        break;
    case 'bungalow':
        TEMPLATE_TYPE.textContent = 'Бунгало';
        break;
    case 'house':
        TEMPLATE_TYPE.textContent = 'Дом';
        break;
    case 'palace':
        TEMPLATE_TYPE.textContent = 'Дворец';
        break;
    case 'hotel':
        TEMPLATE_TYPE.textContent = 'Отель';
        break;
    case false:
        TEMPLATE_TYPE.textContent = '';
}
if (!OFFER_ROOMS || !OFFER_GUESTS) {
    TEMPLATE_GUESTS.textContent = null;
} else {
    TEMPLATE_GUESTS.textContent = OFFER_ROOMS + ' комнаты для ' + OFFER_GUESTS + ' гостей';
}

if (!OFFER_CHECKIN || !OFFER_CHECKOUT) {
    TEMPLATE_TIME.textContent = '';
} else {
    TEMPLATE_TIME.textContent = 'Заезд после ' + OFFER_CHECKIN + ', выезд до ' + OFFER_CHECKOUT;
}

if (!OFFER_FEATURES) {
    TEMPLATE_FEATURES.textContent = '';
} else {
    TEMPLATE_FEATURES.textContent = OFFER_FEATURES;
}

if (!OFFER_DESCRIPTION) {
    TEMPLATE_DESCRIPTION.textContent = null;
} else {
    TEMPLATE_DESCRIPTION.textContent = OFFER_DESCRIPTION;
}

TEMPLATE_PHOTO.src = OFFER_PHOTOS;
TEMPLATE_AVATAR.src = AVATAR;
FRAGMENT.appendChild(OFFER_ELEMENT);
MAP_CANVAS.appendChild(FRAGMENT);


export { OFFER_TEMPLATE };
