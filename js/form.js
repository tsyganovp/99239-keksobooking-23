import { roomTypeToMinPrice } from './data.js';
import { sendData } from './api.js';

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const addressInput = document.querySelector('#address');
const priceInput = document.getElementById('price');
const stayTypeInput = document.getElementById('type');
const roomsInput = document.getElementById('room_number');
const guestsInput = document.getElementById('capacity');
const checkInTime = document.getElementById('timein');
const checkOutTime = document.getElementById('timeout');

let formContent;

/**
 * Блокирует форму ввода объявления
 */
const disableForm = () => {
  form.classList.add('ad-form--disabled');
  formFieldsets.forEach((formField) => {
    formField.disabled = true;
  });
};


const enableForm = () => {
  form.classList.remove('ad-form--disabled');
  formFieldsets.forEach((formField) => {
    formField.disabled = false;
  });
};


// TODO
// 1. Убрать maxValue ок
// 2. inputType, minimalPrce, rooms, guests убрать ок
// 3. переименовать функцию (initFormValidation, setFormValidation) ок
// 4. if (rooms !== guests) { ... вынести в функцию, потому что этот шаг повторяется 3 раза
// 5. поправить начальный placeholder у цены и начальное min ограничение у цены для Квартиры (прваить в HTML) ок
// 6. при изменении типа меняется не только placholder, но и min ок
// 7. составить одно правильное условие
// 8. удалить, потому что валидация опредеяется через атрибут min, который меняется при изменении типа дилья в алгоритме ок

const compareGuestsAndRooms = () => {
  const rooms = Number.parseInt(roomsInput.value, 10);
  const guests = Number.parseInt(guestsInput.value, 10);

  if(rooms >= guests) {
    if(rooms === 100 && guests !== 0) {
      roomsInput.setCustomValidity('Количество комнат не соответвует количеству гостей');
    } else {
      roomsInput.setCustomValidity('');
    }
  } else {
    roomsInput.setCustomValidity('Количество комнат не соответвует количеству гостей');
  }
  roomsInput.reportValidity();
};


const setFormValidation = () => {
  stayTypeInput.addEventListener('change', () => {
    priceInput.placeholder = roomTypeToMinPrice[stayTypeInput.value];
    priceInput.min = roomTypeToMinPrice[stayTypeInput.value];
  });

  roomsInput.addEventListener('change', () => {
    compareGuestsAndRooms();
  });

  guestsInput.addEventListener('change', () => {
    compareGuestsAndRooms();
  });

  checkInTime.addEventListener('change', () => {
    checkOutTime.value = checkInTime.value;
  });

  checkOutTime.addEventListener('change', () => {
    checkInTime.value = checkOutTime.value;
  });
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  compareGuestsAndRooms();
  setFormValidation();
  formContent = new FormData(form);
  sendData(formContent);
});

const setAddress = (lat, lng) => {
  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};


export { disableForm, enableForm, setFormValidation, formContent, setAddress};
