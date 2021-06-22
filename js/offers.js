import { createOffers } from './data.js';

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
let offerRooms = advertisements[0].offer.rooms;
let offerGuests = advertisements[0].offer.guests;
let offerCheckIn = advertisements[0].offer.checkin;
let offerCheckout = advertisements[0].offer.checkout;
let offerFeatures = advertisements[0].offer.features;
let offerDescription = advertisements[0].offer.description;
let offerPhotos = advertisements[0].offer.photos[0];
let avatar = advertisements[0].avatar;

if(offerTitle === null) {
    templateTitle.textContent = null;
} else templateTitle.textContent = offerTitle;

if(offerAddress === null) {
    templateAddress.textContent = null;
} else templateAddress.textContent = offerAddress;
if(offerPrice === null) {
    templatePrice.textContent = null;
} else templatePrice.textContent = offerPrice;


switch (offerType) {
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
    case null:
        templateType.textContent = '';
}
if (offerRooms == null || offerGuests == null) {
    templateGuests.textContent = null;
} else templateGuests.textContent = offerRooms + ' комнаты для ' + offerGuests + ' гостей';

if(offerCheckIn === null || offerCheckout === null) {
    templateTime.textContent = '';
} else templateTime.textContent = 'Заезд после ' + offerCheckIn + ', выезд до ' + offerCheckout;

if (offerFeatures === null) {
    templateFeatures.textContent = '';
} else templateFeatures.textContent = offerFeatures;

if(offerDescription === null) {
    templateDescription.textContent = null;
} else templateDescription.textContent = offerDescription;

templatePhotos.setAttribute('src', offerPhotos);
templateAvatar.setAttribute('src', avatar);
fragment.appendChild(offerElement);

mapCanvas.appendChild(fragment);



let test = offerGuests;


export { offerTemplate, test };
