import {getRandomIntInclusive, getRandomFloat} from './util.js';


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

export {createAuthor, createLocation,createOffer,createOffers};
