import {
  FRAGMENT, MAP_CANVAS,
  OFFER_ELEMENT, TEMPLATE_TITLE, TEMPLATE_ADDRESS, TEMPLATE_PRICE, TEMPLATE_TYPE, TEMPLATE_GUESTS,
  TEMPLATE_TIME, TEMPLATE_FEATURES, TEMPLATE_DESCRIPTION, TEMPLATE_PHOTO, TEMPLATE_AVATAR, OFFER_TITLE, OFFER_ADDRESS,
  OFFER_PRICE, OFFER_TYPE, OFFER_ROOMS, OFFER_GUESTS, OFFER_CHECKIN, OFFER_CHECKOUT, OFFER_FEATURES,
  OFFER_DESCRIPTION, OFFER_PHOTOS, AVATAR
} from './data.js';

const offerDraw = function () {
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
    TEMPLATE_GUESTS.textContent = `${OFFER_ROOMS  } комнаты для ${  OFFER_GUESTS  } гостей`;
  }

  if (!OFFER_CHECKIN || !OFFER_CHECKOUT) {
    TEMPLATE_TIME.textContent = '';
  } else {
    TEMPLATE_TIME.textContent = `Заезд после ${  OFFER_CHECKIN  }, выезд до ${  OFFER_CHECKOUT}`;
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
};


export {offerDraw};
