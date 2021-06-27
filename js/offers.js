import { roomType } from './data.js';


const offerDraw = function (ADVERTISEMENTS) {
  for (let i = 0; i <= ADVERTISEMENTS.length - 1; i++) {
    const offerTemplate = document.querySelector('#card').content; // находим содержимое шаблона
    const offerCard = offerTemplate.querySelector('.popup'); // находим объявление
    const fragment = document.createDocumentFragment();
    const mapCanvas = document.querySelector('#map-canvas');
    const offerElement = offerCard.cloneNode(true);
    const templateTitle = offerElement.querySelector('.popup__title');
    const templateAddress = offerElement.querySelector('.popup__text--address');
    const templatePrice = offerElement.querySelector('.popup__text--price');
    const templateType = offerElement.querySelector('.popup__type');
    const templateGuests = offerElement.querySelector('.popup__text--capacity');
    const templateTime = offerElement.querySelector('.popup__text--time');
    const templateFeatures = offerElement.querySelector('.popup__features');
    const templateDescription = offerElement.querySelector('.popup__description');
    const templatePhoto = offerElement.querySelector('.popup__photo');
    const templateAvatar = offerElement.querySelector('.popup__avatar');

    const offerTitle = ADVERTISEMENTS[i].offer.title;
    const offerAddress = ADVERTISEMENTS[i].offer.address;
    const offerPrice = `${ADVERTISEMENTS[i].offer.price} ₽/ночь`;
    const offerType = ADVERTISEMENTS[i].offer.type;
    const offerRooms = ADVERTISEMENTS[i].offer.rooms;
    const offerGuests = ADVERTISEMENTS[i].offer.guests;
    const offerCheckin = ADVERTISEMENTS[i].offer.checkin;
    const offerCheckout = ADVERTISEMENTS[i].offer.checkout;
    const offerFeatures = ADVERTISEMENTS[i].offer.features;
    const offerDescription = ADVERTISEMENTS[i].offer.description;
    const offerPhotos = ADVERTISEMENTS[i].offer.photos[i];
    const avatar = ADVERTISEMENTS[i].author.avatar;

    if (!offerTitle) {
      templateTitle.textContent = null;
    } else {
      templateTitle.textContent = offerTitle;
    }

    if (!offerAddress) {
      templateAddress.textContent = null;
    } else {
      templateAddress.textContent = offerAddress;
    }

    if (!offerPrice) {
      templatePrice.textContent = null;
    } else {
      templatePrice.textContent = offerPrice;
    }

    if (offerType) {
      templateType.textContent = roomType.get(offerType);
    }

    if (!offerRooms || !offerGuests) {
      templateGuests.textContent = null;
    } else {
      templateGuests.textContent = `${offerRooms} комнаты для ${offerGuests} гостей`;
    }

    if (!offerCheckin || !offerCheckout) {
      templateTime.textContent = '';
    } else {
      templateTime.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
    }

    if (!offerFeatures) {
      templateFeatures.textContent = '';
    } else {
      templateFeatures.textContent = offerFeatures;
    }

    if (!offerDescription) {
      templateDescription.textContent = null;
    } else {
      templateDescription.textContent = offerDescription;
    }

    templatePhoto.src = offerPhotos;
    templateAvatar.src = avatar;
    fragment.appendChild(offerElement);
    mapCanvas.appendChild(fragment);
  }
};


export { offerDraw };
