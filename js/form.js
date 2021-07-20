import { roomTypeToMinPrice } from './data.js';
import { sendData } from './api.js';
import { setInitialAddress } from './map.js';
import { debounce } from './util.js';


const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const addressInput = document.querySelector('#address');
const priceInput = document.getElementById('price');
const stayTypeInput = document.getElementById('type');
const roomsInput = document.getElementById('room_number');
const guestsInput = document.getElementById('capacity');
const checkInTime = document.getElementById('timein');
const checkOutTime = document.getElementById('timeout');
const resetButton = document.querySelector('.ad-form__reset');

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


const compareGuestsAndRooms = () => {
  const rooms = Number.parseInt(roomsInput.value, 10);
  const guests = Number.parseInt(guestsInput.value, 10);

  if (rooms >= guests) {
    if (rooms === 100 && guests !== 0) {
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

const initForm = () => {
  compareGuestsAndRooms();
  setFormValidation();

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formContent = new FormData(form);
    sendData(formContent, () => {}, () => {});
  });

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.reset();
    setInitialAddress();
  });
};

const setAddress = (lat, lng) => {
  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};


export { disableForm, enableForm, setFormValidation, setAddress, initForm };
