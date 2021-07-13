import { roomTypeToMinPrice } from './data.js';
import { adderessInput } from './map.js';
import { sendData } from './network.js';

const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const formFilter = document.querySelector('.map__filters');
const formSelects = formFilter.querySelectorAll('select');
const formFields = formFilter.querySelectorAll('fieldset');
const priceInput = document.getElementById('price');
const stayTypeInput = document.getElementById('type');
const roomsInput = document.getElementById('room_number');
const guestsInput = document.getElementById('capacity');
const checkInTime = document.getElementById('timein');
const checkOutTime = document.getElementById('timeout');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');
const featureLabels = document.querySelectorAll('.features__label');

let formContent;

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

const setInintialForm = () => {
  //offerTitle.value = '';
  adderessInput.value =  '35.68950,139.69171'; //не работает
  checkInTime.value = '12:00';
  checkOutTime.value = '12:00';
  roomsInput.firstChild.selected(true);
  guestsInput.firstChild.selected(true);
  featureLabels.find('active').remove();
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
    formContent = new FormData(form);
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
submitButton.addEventListener('click', () => {
  //evt.preventDefault();
  compareGuestsAndRooms();
  setFormValidation();
  sendData();
});
resetButton.addEventListener('click', () => {
  setInintialForm();
});

export { setDisableForm, setEnableForm, setFormValidation, formContent};
