//import { roomTypeToMinPrice } from './data.js';
import { sendData } from './api.js';
import { setInitialAddress } from './map.js';
import { showError, showSuccess } from './form-messages.js';
import { resetFilters } from './filter.js';


const roomTypeToMinPrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

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
const avatarInput = document.querySelector('#avatar');
const offerPhotoInput = document.querySelector('#images');

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

const checkAvatarInputType = (photo) => {
  photo.addEventListener('change', () => {
    const fileValue = photo.value;
    const fileExtension = fileValue.substring(fileValue.lastIndexOf('.'));
    console.log(fileExtension);
    if(fileExtension !== '.jpg' && fileExtension !== '.jpeg' && fileExtension !== '.gif' && fileExtension !== '.png' && fileExtension !== '.svg')
    {
      photo.setCustomValidity('Возможна загрузка только файлов изображений!')
    } else { 
      photo.setCustomValidity('');
    }
    photo.reportValidity();
  })
}

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
  checkAvatarInputType(avatarInput);
  checkAvatarInputType(offerPhotoInput); 

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formContent = new FormData(form);
    sendData(formContent, () => {
      form.reset();
      resetFilters();
      setInitialAddress();
      showSuccess();
    }, showError);
  });

  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.reset();
    resetFilters();
    setInitialAddress();
  });
};

const setAddress = (lat, lng) => {
  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};


export { disableForm, enableForm, setFormValidation, setAddress, initForm };
