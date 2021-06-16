import {createAuthor, createLocation,createOffer} from './data.js';

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('Максимальное число меньше минимального');
  }
  if (max < min) {
    throw new Error('Максимальное число меньше минимального');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(1, 10);

const getRandomFloat = (min, max, numbersAfter) => {
  if (min < 0 || max < 0) {
    throw new Error('Введите корректное число');
  }
  if (max < min) {
    throw new Error('Максимальное число меньше минимального');
  }
  return (Math.random() * (max - min) + min).toFixed(numbersAfter);
};

getRandomFloat(1, 10, 2);

const advertisementsArrayGenerator = () => {
  const advertisements = [];
  for (let ind = 0; ind <= 10; ind++) {

    const authorObj = createAuthor();
    const locationObj = createLocation();
    const offerObj = createOffer();

    offerObj.address = `${locationObj.lat}, ${locationObj.lng}`;

    const bookStay = {
      author: authorObj,
      offer: offerObj,
      location: locationObj,
    };
    advertisements.push(bookStay);
  }
};
export {getRandomIntInclusive, getRandomFloat, advertisementsArrayGenerator};
