import {
  drawPoints
} from './map.js';
const URL_API = 'https://23.javascript.pages.academy/keksobooking';

const getData = () => {
  fetch(`${URL_API}/data`)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error('Ошибка при получении данных');
    })
    .then((response) => response.json())
    .then((data) => {
      drawPoints(data);
    });
};

/*
const getData = () => {
  fetch(`${URL_API}/data`)
    .then((response) => response.json())
    .then((data) => {
      drawPoints(data);
    });
};
*/

export {
  getData
};
