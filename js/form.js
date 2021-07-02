//let mapBlock = document.querySelector('.map__canvas');
let form = document.querySelector('.ad-form');
let formFieldsets = form.querySelectorAll('fieldset');
let formFilter = document.querySelector('.map__filters');
let formSelets = formFilter.querySelectorAll('select');
let formFields = formFilter.querySelectorAll('fieldset');

// TODO
// 1. Нормальный циклы, forEach || методы массивы || for of
// 2. Никаких setAttribute => api
// .src .disabled = true .на-любой-чих
const setDisable = function () {
  form.classList.add('ad-form--disabled');

  formFieldsets.forEach(formField => {
    formField.disabled = true;
  });
  
  formFilter.classList.add('map__filters--disabled');

  formSelets.forEach(item => {
    item.disabled = true;
  });

  formFields.forEach(item => {
    item.disabled = true;
  });
}

const setEnable = function() {
  form.classList.remove('ad-form--disabled');

  formFieldsets.forEach(formField => {
    formField.disabled = false;
  });

  formFilter.classList.add('map__filters--disabled');

  formFields.forEach(item => {
    item.disabled = false;
  });

  form.forEach(item => {
    item.disabled = false;
  });

}

export {setDisable, setEnable};
