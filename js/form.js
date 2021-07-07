import { roomTypeToMinPrice } from './data.js';


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
const checkInTime  = document.getElementById('timein');
const checkOutTime  = document.getElementById('timeout');

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
// 1. Убрать maxValue
// 2. inputType, minimalPrce, rooms, guests убрать 
// 3. переименовать функцию (initFormValidation, setFormValidation)
// 4. if (rooms !== guests) { ... вынести в функцию, потому что этот шаг повторяется 3 раза
// 5. поправить начальный placeholder у цены и начальное min ограничение у цены для Квартиры (прваить в HTML)
// 6. при изменении типа меняется не только placholder, но и min
// 7. составить одно правильное условие
// 8. удалить, потому что валидация опредеяется через атрибут min, который меняется при изменении типа дилья в алгоритме
const validationForm = () => {
  const maxValue = 1000000;
  let inputType = stayTypeInput.value;
  let minimalPrice = null;
  let rooms = roomsInput.value;
  let guests = guestsInput.value;

  if (rooms !== guests) {
    roomsInput.setCustomValidity(`Число комнат не соответствует количеству гостей`);
  } else {
    roomsInput.setCustomValidity('');
  }
  // const test = roomsInput.reportValidity();

  stayTypeInput.addEventListener('change', () => {
    inputType = stayTypeInput.value;
    minimalPrice = roomTypeToMinPrice[inputType];
    priceInput.placeholder = `${minimalPrice}`;
    // 6.
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
    // 7.
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

  // 8.
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

  checkInTime.addEventListener('change', () => {
    checkOutTime.value = checkInTime.value;
  });

  checkOutTime.addEventListener('change', () => {
    checkInTime.value = checkOutTime.value;
  });
};


export { setDisableForm, setEnableForm, validationForm };
