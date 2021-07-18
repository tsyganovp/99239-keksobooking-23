import {
  drawPoints
} from './map.js';
import {
  formContent
} from './form.js';
import {
  showSuccsess,
  showError
} from './form-messages.js';
import { filterOffers } from './filter.js';


let jsonResult = null;
const URL_API = ' https://23.javascript.pages.academy/keksobooking';

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
      jsonResult = data;
      //console.log(jsonResult);
      drawPoints(data);
      //filterOffers(data);
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

export {
  getData,
  sendData,
  jsonResult
};
