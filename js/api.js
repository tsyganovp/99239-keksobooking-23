import {
  drawPoints
} from './map.js';

import {
  showSuccsess,
  showError
} from './form-messages.js';


const URL_API = ' https://23.javascript.pages.academy/keksobooking';

const getOffers = (onSuccess, onError) => {
  fetch(`${URL_API}/data`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      
      throw new Error('Ошибка при получении данных');
    })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
      //drawPoints(data);
      //filterOffers(data);
    })
    .catch((error) => {
      onError(error.message);
    });
};

const sendData = (formContent) => {
  fetch(URL_API, {
    method: 'POST',
    body: formContent,
  }).then((response) => {

    if(response.ok) {
      showSuccsess();
    } else {
      showError();
    }
  });
};

export {getOffers, sendData};
