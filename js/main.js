/* eslint-disable no-console */
import {clearForm, disableForm, enableForm,initSendData} from './form.js';
import {drawMap, drawPoints, setInitialAddress} from './map.js';
import {getOffers} from './api.js';
import {disableFilterForm, enableFilterForm, initFilterForm} from './filter.js';


let offers = [];


const onSuccess = (offersFromApi) => {

  offers = offersFromApi;
  console.log(offers);
  const offersToRender = offers.slice(0, 10);

  // отрисовать объявления на карте offersToRender
  drawPoints(offersToRender);
  // разблокировать фильтры
  enableFilterForm();
  // инициализация формы фильтрации
  initFilterForm(offers);
};

const onError = (errorMessage) => {
  console.log(errorMessage);
};

disableForm();
disableFilterForm();
getOffers(onSuccess, onError);
drawMap(() => {
  setInitialAddress();
  enableForm();
});
initSendData();
clearForm();

//const offers = getData();
// eslint-disable-next-line no-console
//console.log(offers);

// getData();

// drawMap();
// filterOnChangeButton();
// setFormValidation();

//showSuccsess();
