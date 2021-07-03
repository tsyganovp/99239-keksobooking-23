import { roomTypeToTitle } from './data.js';


const renderCard = (card) => {
  const offerTemplate = document.querySelector('#card').content;
  const offerCard = offerTemplate.querySelector('.popup');
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

  card.offer.title = '';

  const offerTitle = card.offer.title;
  const offerAddress = card.offer.address;
  const offerPrice = `${card.offer.price} ₽/ночь`;
  const offerType = card.offer.type;
  const offerRooms = card.offer.rooms;
  const offerGuests = card.offer.guests;
  const offerCheckin = card.offer.checkin;
  const offerCheckout = card.offer.checkout;
  const offerFeatures = card.offer.features;
  const offerDescription = card.offer.description;
  const offerPhotos = card.offer.photos;
  const avatar = card.author.avatar;

  if (!offerTitle) {
    templateTitle.remove();
  } else {
    templateTitle.textContent = offerTitle;
  }

  if (!offerAddress) {
    templateAddress.remove();
  } else {
    templateAddress.textContent = offerAddress;
  }
  if (!offerPrice) {
    templatePrice.remove();
  } else {
    templatePrice.textContent = offerPrice;
  }

  if (!offerType) {

    templateType.remove();
  } else {
    templateType.textContent = roomTypeToTitle[offerType];
  }

  if (!offerRooms || !offerGuests) {
    templateGuests.remove();
  } else {
    templateGuests.textContent = `${offerRooms} комнаты для ${offerGuests} гостей`;
  }

  if (!offerCheckin || !offerCheckout) {
    templateTime.remove();
  } else {
    templateTime.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
  }

  if (!offerDescription) {
    templateDescription.remove();
  } else {
    templateDescription.textContent = offerDescription;
  }

  if (!offerFeatures) {
    templateFeatures.remove();
  } else {
    templateFeatures.innerHTML = '';

    offerFeatures.forEach((item) => {
      const element = document.createElement('li');
      element.classList.add('popup__feature', `popup__feature--${item}`);
      const featuresTemplate = offerFeatures.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');
      templateFeatures.innerHTML = featuresTemplate;
    });

  }

  templatePhoto.src = offerPhotos;
  templateAvatar.src = avatar;
  mapCanvas.append(offerElement);
};


export { renderCard };
// TODO
// 1. Функция должна работать с единичным объектом
// 2. Все функции стрелочные
// 3. Избавиться от fragment'а, так как он нужен для вставки множества элементов в DOM
// 4. textContent = null => remove node element
// 5. features по разметке
