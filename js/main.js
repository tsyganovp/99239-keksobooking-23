import {disableForm, enableForm, setFormValidation} from './form.js';
import {drawMap, filterOnChangeButton, setInitialAddress} from './map.js';
import {getOffers} from './api.js';
import {disableFilterForm, enableFilterForm} from './filter.js';


let offers = [];


const onSuccess = (offersFromApi) => {
  console.log(offers);

  offers = offersFromApi;

  const offersToRender = offers.slice(0, 10);
  // отрисовать объявления на карте offersToRender

  // разблокировать фильтры

  // инициализация формы фильтрации 
}

const onError = (errorMessage) => {
  console.log(errorMessage);
}

disableForm();
disableFilterForm();
getOffers(onSuccess, onError);
drawMap(() => {
  setInitialAddress();
  enableForm();
});


//const offers = getData();
// eslint-disable-next-line no-console
//console.log(offers);

// getData();

// drawMap();
// filterOnChangeButton();
// setFormValidation();

//showSuccsess();
