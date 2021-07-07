import {
  roomTypeToMinPrice
} from './data.js';


const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const formFilter = document.querySelector('.map__filters');
const formSelects = formFilter.querySelectorAll('select');
const formFields = formFilter.querySelectorAll('fieldset');
const priceInput = document.getElementById('price');
const stayTypeInput = document.getElementById('type');
const roomsInput = document.getElementById('room_number');
const guestsInput = document.getElementById('capacity');
//const submitButton = document.querySelector('.ad-form__submit');
const checkInTime = document.getElementById('timein');
const checkOutTime = document.getElementById('timeout');

const setDisableForm = () => {
  form.classList.add('ad-form--disabled');

  formFieldsets.forEach((formField) => {
    formField.disabled = true;
  });

  formFilter.classList.add('map__filters--disabled');

  formSelects.forEach((item) => {
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

  formFilter.classList.remove('map__filters--disabled');

  formSelects.forEach((item) => {
    item.disabled = false;
  });

  formFields.forEach((item) => {
    item.disabled = false;
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
  if(roomsInput.value >= guestsInput.value || roomsInput.value === 100 && roomsInput.value === 0) {
    roomsInput.setCustomValidity('');
  } else {
    roomsInput.setCustomValidity('Число комнат не соответсвует числу гостей');}
};

const setFormValidation = () => {
  stayTypeInput.addEventListener('change', () => {
    priceInput.placeholder = `${ roomTypeToMinPrice[stayTypeInput.value]}`;
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


export {
  setDisableForm,
  setEnableForm,
  setFormValidation
};
