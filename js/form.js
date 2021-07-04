import { roomTypeToMinPrice } from './data.js';


const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const formFilter = document.querySelector('.map__filters');
const formSelets = formFilter.querySelectorAll('select');
const formFields = formFilter.querySelectorAll('fieldset');

const priceInput = document.getElementById('price');
const stayTypeInput = document.getElementById('type');
const roomsInput = document.getElementById('room_number');
const guestsInput = document.getElementById('capacity');
//const submitButton = document.querySelector('.ad-form__submit');

const setDisableForm = () => {
  form.classList.add('ad-form--disabled');

  formFieldsets.forEach((formField) => {
    formField.disabled = true;
  });

  formFilter.classList.add('map__filters--disabled');

  formSelets.forEach((item) => {
    item.disabled = true;
  });

  formFields.forEach((item) => {
    item.disabled = true;
  });
};

const setEnableForm = () => {
  form.classList.remove('ad-form--disabled');

  formFieldsets.forEach((formField) => {
    formField.disabled = false;
  });

  formFilter.classList.add('map__filters--disabled');

  formFields.forEach((item) => {
    item.disabled = false;
  });

  form.forEach((item) => {
    item.disabled = false;
  });

};

const validationForm = () => {

  const maxValue = 1000000;
  let inputType = null;
  let minimalPrice = null;
  let rooms = roomsInput.value;
  let guests = guestsInput.value;


  if (rooms !== guests) {
    roomsInput.setCustomValidity(`Число комнат не соответствует количеству гостей`);
  } else {
    roomsInput.setCustomValidity('');
  }
  roomsInput.reportValidity();


  stayTypeInput.addEventListener('change', () => {
    inputType = stayTypeInput.value;
    minimalPrice = roomTypeToMinPrice[inputType];
  });

  roomsInput.addEventListener('change', () => {
    rooms = roomsInput.value;
    guests = guestsInput.value;
    if (rooms !== guests) {
      roomsInput.setCustomValidity(`Число комнат не соответствует количеству гостей`);
    } else {
      roomsInput.setCustomValidity('');
    }
    roomsInput.reportValidity();
  });

  guestsInput.addEventListener('change', () => {
    rooms = roomsInput.value;
    guests = guestsInput.value;
    console.log(rooms);
    console.log(guests);
    if (rooms !== guests) {
      guestsInput.setCustomValidity(`Число гостей не соответствует количеству комнат`);
    } else {
      guestsInput.setCustomValidity('');
    }
    if(rooms === '100' && guests === '0') {
      guestsInput.setCustomValidity('');
    } else {
      guestsInput.setCustomValidity(`Число гостей не соответствует количеству комнат`);
    }
    guestsInput.reportValidity();
  });

  priceInput.addEventListener('change', () => {
    let userInputValue = priceInput.value;
    minimalPrice = roomTypeToMinPrice[inputType];
    if (userInputValue > maxValue) {
      priceInput.setCustomValidity(`Число не должно быть больше ${maxValue}`);
    } else {
      priceInput.setCustomValidity('');
    }
    if (userInputValue < minimalPrice) {
      priceInput.setCustomValidity(`Для этого типа жилья минимальная цена должна быть не ниже ${minimalPrice}`);
    } else {
      priceInput.setCustomValidity('');
    }

    priceInput.reportValidity();
  });
};


export { setDisableForm, setEnableForm, validationForm };
// TODO
// 1. Нормальный циклы, forEach || методы массивы || for of
// 2. Никаких setAttribute => api
// .src .disabled = true .на-любой-чих
