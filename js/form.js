//let mapBlock = document.querySelector('.map__canvas');
let form = document.querySelector('.ad-form');
let formFieldsets = form.querySelectorAll('fieldset');
let filter = document.querySelector('.map__filters');

const setDisable = function () {
  form.classList.add('ad-form--disabled');

  for(let i = 0; i <= formFieldsets.length-1; i++) {
    formFieldsets[i].setAttribute('disabled', true);
  }

  filter.classList.add('map__filters--disabled');

  for(let i = 0; i <= filter.length - 1; i++) {
    filter[i].setAttribute('disabled', true);
  }
}

const setEnable = function() {
  form.classList.remove('ad-form--disabled');

  for(let i = 0; i <= formFieldsets.length-1; i++) {
    formFieldsets[i].setAttribute('disabled', false);
  }

  filter.classList.remove('map__filters--disabled');

  for(let i = 0; i <= filter.length - 1; i++) {
    filter[i].setAttribute('disabled', false);
  }

}

export {setDisable, setEnable};ыы
