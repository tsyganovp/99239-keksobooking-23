import {disableForm, enableForm,initForm} from './form.js';
import {drawMap, drawPoints, setInitialAddress} from './map.js';
import {getOffers} from './api.js';
import {disableFilterForm, enableFilterForm, initFilterForm} from './filter.js';
import {showError} from './form-messages.js';


const onSuccess = (offersFromApi) => {
  offers = offersFromApi;
  const offersToRender = offers.slice(0, 10);

  drawPoints(offersToRender);
  enableFilterForm();
  initFilterForm(offersFromApi);
};

const onError = (errorMessage) => {
  showError(errorMessage);
};

disableForm();
disableFilterForm();

getOffers(onSuccess, onError);

drawMap(() => {
  setInitialAddress();
  enableForm();
});

initForm();
