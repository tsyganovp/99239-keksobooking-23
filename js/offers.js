import {createOffers} from './data.js';

let offerTemplate = document.querySelector('#card').content; // находим содержимое шаблона
let offerCard = offerTemplate.querySelector('.popup'); // находим объявление 
const fragment = document.createDocumentFragment();
let mapCanvas = document.querySelector('#map-canvas');
const advertisements = createOffers();

let offerElement = offerCard.cloneNode(true);

let templateTitle = offerElement.querySelector('.popup__title');
let templateAddress = offerElement.querySelector('.popup__text--address');
let templatePrice = offerElement.querySelector('.popup__text--price');
let templateType = offerElement.querySelector('.popup__type');
let templateGuests = offerElement.querySelector('.popup__text--capacity');
let templateTime = offerElement.querySelector('.popup__text--time');
let templateFeatures = offerElement.querySelector('.popup__features');
let templateDescription = offerElement.querySelector('.popup__description');
let templatePhotos = offerElement.querySelector('.popup__photos');
let templateAvatar = offerElement.querySelector('.popup__avatar');

let offerTitle = advertisements[0].offer.title;
let offerAddress = advertisements[0].offer.address;
let offerPrice = advertisements[0].offer.price + ' ₽/ночь';
let offerType = advertisements[0].offer.type;


templateTitle.textContent = offerTitle;
templateAddress.textContent = offerAddress;
templatePrice.textContent = offerPrice;

switch(offerType) {
    case 'flat': 
        templateType.textContent = 'Квартира';
        break;
    case 'bungalow':
        templateType.textContent = 'Бунгало';
        break;
    case 'house':
        templateType.textContent = 'Дом';
        break;
    case 'palace':
        templateType.textContent = 'Дворец';
        break;
    case 'hotel':
        templateType.textContent = 'Отель';
        break;
}
templateGuests.textContent = advertisements[0].offer.rooms + ' комнаты для ' + advertisements[0].offer.guests + ' гостей';
templateTime.textContent = 'Заезд после ' + advertisements[0].offer.checkin + ', выезд до ' + advertisements[0].offer.checkout;
templateFeatures.textContent = advertisements[0].offer.features;
templateDescription.textContent = advertisements[0].offer.description;
templatePhotos.setAttribute('src', advertisements[0].offer.photos[0]);
templateAvatar.setAttribute('src', advertisements[0].avatar);
fragment.appendChild(offerElement);
mapCanvas.appendChild(fragment);



let test = advertisements;


export {offerTemplate,test};
