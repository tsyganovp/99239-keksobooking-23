import {getRandomIntInclusive, getRandomFloat} from './util.js';

/*
Переменне для генерации объявления
*/
const AVATAR_PIC_NUMBERS = 8;
const MAXIMUM_PER_DAY_PRICE = 1000;
const MAXIMUM_ROMS = 5;
const MAXIMUM_GUESTS = 4;
const ROOM_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_TIME = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const NUMBER_OF_PHOTOS = 10;
const LAT_MINIMUM = 35.65000;
const LAT_MAXIMUM = 35.70000;
const LNG_MINIMUM = 139.70000;
const LNG_MAXIMUM = 139.80000;

/*
Переменные для отрисовки объявления
*/
const OFFER_TEMPLATE = document.querySelector('#card').content; // находим содержимое шаблона
const OFFER_CARD = OFFER_TEMPLATE.querySelector('.popup'); // находим объявление
const FRAGMENT = document.createDocumentFragment();
const MAP_CANVAS = document.querySelector('#map-canvas');
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

/**
* Генерирует массив особенностей объекта проживания
* @return {string[]}
*/
const createFeatures = () => {
  const featuresArray = [];
  for (let ind = 0; ind <= getRandomIntInclusive(1, FEATURES.length); ind++) {
    const random = FEATURES[Math.floor(Math.random() * FEATURES.length)];
    featuresArray[ind] = random;
  }
  return Array.from(new Set(featuresArray.map((item) => item.trim())));//поиск и удаление дублей из массива featuresArray
};

/**
* Генерирует массив строк с url'ами фотографий мест проживания
* @return {string[]}
*/
const createPhotos = () => {
  const photosArray = new Array(NUMBER_OF_PHOTOS).fill(null);
  for (let ind = 0; ind <= NUMBER_OF_PHOTOS - 1; ind++) {
    photosArray[ind] = PHOTOS[getRandomIntInclusive(1, PHOTOS.length - 1)];
  }
  return photosArray;
};

/**
* Генерирует аватар арендодателя
* @return {string}
*/
const createAuthor = () => ({
  avatar: `img/avatars/user0${getRandomIntInclusive(0, AVATAR_PIC_NUMBERS)}${'.png'.toString()}`,
});

/**
* Генерирует координаты объекта проживания
*/
const createLocation = () => ({//создание координат
  lat: getRandomFloat(LAT_MINIMUM, LAT_MAXIMUM, 4),
  lng: getRandomFloat(LNG_MINIMUM, LNG_MAXIMUM, 4),
});

/**
* Генерирует объявление о сдаче
*/
const createOffer = () => ({
  title: 'Сдается жилье!',
  address: null,
  price: getRandomIntInclusive(1, MAXIMUM_PER_DAY_PRICE),
  type: ROOM_TYPE[getRandomIntInclusive(0, ROOM_TYPE.length - 1)],
  rooms: getRandomIntInclusive(1, MAXIMUM_ROMS),
  guests: getRandomIntInclusive(1, MAXIMUM_GUESTS),
  checkin: CHECK_IN_TIME[getRandomIntInclusive(0, CHECK_IN_TIME.length - 1)],
  checkout: CHECK_OUT_TIME[getRandomIntInclusive(0, CHECK_OUT_TIME.length - 1)],
  features: createFeatures(),
  description: 'Хороший вариант, Кекс одобряет!',
  photos: createPhotos(),
});

/**
* Генерирует массив объявлений
* @return {array[]}
*/
const createOffers = () => {
  const tray = [];

  for (let ind = 0; ind <= 9; ind++) {

    const authorObj = createAuthor();
    const locationObj = createLocation();
    const offerObj = createOffer();

    offerObj.address = `${locationObj.lat}, ${locationObj.lng}`;

    const bookStay = {
      author: authorObj,
      offer: offerObj,
      location: locationObj,
    };
    tray.push(bookStay);
  }
  return tray;
};

const ADVERTISEMENTS = createOffers(); // формируем данные для объявлений

/*
Переменные для заполнения объявления
*/
const OFFER_TITLE = ADVERTISEMENTS[0].offer.title;
const OFFER_ADDRESS = ADVERTISEMENTS[0].offer.address;
const OFFER_PRICE = `${ADVERTISEMENTS[0].offer.price  } ₽/ночь`;
const OFFER_TYPE = ADVERTISEMENTS[0].offer.type;
const OFFER_ROOMS = ADVERTISEMENTS[0].offer.rooms;
const OFFER_GUESTS = ADVERTISEMENTS[0].offer.guests;
const OFFER_CHECKIN = ADVERTISEMENTS[0].offer.checkin;
const OFFER_CHECKOUT = ADVERTISEMENTS[0].offer.checkout;
const OFFER_FEATURES = ADVERTISEMENTS[0].offer.features;
const OFFER_DESCRIPTION = ADVERTISEMENTS[0].offer.description;
const OFFER_PHOTOS = ADVERTISEMENTS[0].offer.photos[0];
const AVATAR = ADVERTISEMENTS[0].author.avatar;


export {createAuthor, createLocation,createOffer,createOffers};
export {OFFER_TEMPLATE,OFFER_CARD,FRAGMENT,MAP_CANVAS,ADVERTISEMENTS,
  OFFER_ELEMENT,TEMPLATE_TITLE,TEMPLATE_ADDRESS, TEMPLATE_PRICE,TEMPLATE_TYPE,TEMPLATE_GUESTS,
  TEMPLATE_TIME,TEMPLATE_FEATURES,TEMPLATE_DESCRIPTION,TEMPLATE_PHOTO,TEMPLATE_AVATAR,OFFER_TITLE,OFFER_ADDRESS,
  OFFER_PRICE,OFFER_TYPE,OFFER_ROOMS,OFFER_GUESTS,OFFER_CHECKIN,OFFER_CHECKOUT,OFFER_FEATURES,
  OFFER_DESCRIPTION,OFFER_PHOTOS,AVATAR};
