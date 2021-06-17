import {getRandomIntInclusive, getRandomFloat} from './util.js';


//переменные для работы программы
const avatarPicNumber = 8;
const maximumPerDayPrice = 1000;
const maximumRooms = 5;
const maximumGuests = 4;
const ROOM_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_TIME = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const featuresArrLength = FEATURES.length;
const numberOfPhotos = 10;
const latMinimum = 35.65000;
const latMaximum = 35.70000;
const lngMinimum = 139.70000;
const lngMaximum = 139.80000;

/**
* Генерирует массив особенностей объекта проживания
* @return {array[]}
*/
const featuresGenerate = () => {
  const featuresArray = [];
  for (let ind = 0; ind <= getRandomIntInclusive(1, featuresArrLength); ind++) {
    const random = FEATURES[Math.floor(Math.random() * FEATURES.length)];
    featuresArray[ind] = random;
  }
  return Array.from(new Set(featuresArray.map((item) => item.trim())));//поиск и удаление дублей из массива featuresArray
};

/**
* Генерирует массив строк с url'ами фотографий мест проживания
* @return {string[]}
*/
const photosGenerate = () => {
  const photosArray = new Array(numberOfPhotos).fill(null);
  for (let ind = 0; ind <= numberOfPhotos - 1; ind++) {
    photosArray[ind] = photos[getRandomIntInclusive(1, photos.length - 1)];
  }
  return photosArray;
};

/**
* Генерирует аватар арендодателя
*/
const createAuthor = () => ({
  avatar: `img/avatars/user0${getRandomIntInclusive(0, avatarPicNumber)}${'.png'.toString()}`,
});

/**
* Генерирует координаты объекта проживания
*/
const createLocation = () => ({//создание координат
  lat: getRandomFloat(latMinimum, latMaximum, 4),
  lng: getRandomFloat(lngMinimum, lngMaximum, 4),
});

/**
* Генерирует объявление о сдаче
*/
const createOffer = () => ({
  title: 'Сдается жилье!',
  address: null,
  price: getRandomIntInclusive(1, maximumPerDayPrice),
  type: ROOM_TYPE[getRandomIntInclusive(0, ROOM_TYPE.length - 1)],
  rooms: getRandomIntInclusive(1, maximumRooms),
  guests: getRandomIntInclusive(1, maximumGuests),
  checkin: getRandomIntInclusive(0, CHECK_IN_TIME.length - 1),
  checkout: getRandomIntInclusive(0, CHECK_OUT_TIME.length - 1),
  features: featuresGenerate(),
  description: 'Хороший вариант, Кекс одобряет!',
  photos: photosGenerate(),
});

/**
* Генерирует массив объявлений
* @return {array[]}
*/
const advertisementsArrayGenerate = () => {
  const tray =[];

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
const advertisements = advertisementsArrayGenerate();


export {createAuthor, createLocation,createOffer, advertisementsArrayGenerate,advertisements};
