let form = document.querySelector('.ad-form');
let formFieldsets = form.querySelectorAll('fieldset');
let formFilter = document.querySelector('.map__filters');
let formSelets = formFilter.querySelectorAll('select');
let formFields = formFilter.querySelectorAll('fieldset');

const setDisableForm = () => {
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

const setEnableForm = () => {
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


export {setDisableForm, setEnableForm};
// TODO
// 1. Нормальный циклы, forEach || методы массивы || for of
// 2. Никаких setAttribute => api
// .src .disabled = true .на-любой-чих