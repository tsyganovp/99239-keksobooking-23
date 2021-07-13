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

const sendData = () => {
  try {
    fetch(URL_API, {
      method: 'POST',
      body: formContent,
    });
    showSuccsess();
  } catch (error) {
    showError();
  }
};

export {
  getData,
  sendData
};
