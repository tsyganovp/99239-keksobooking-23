import {disableForm, enableForm,initForm} from './form.js';
import {drawMap, drawPoints, setInitialAddress} from './map.js';
import {loadOffers} from './api.js';
import {disableFilterForm, enableFilterForm, initFilterForm} from './filter.js';
import {showError} from './form-messages.js';
import { setOffers } from './store.js';


const onSuccess = (offersFromApi) => {
  setOffers(offersFromApi);
  const offersToRender = offersFromApi.slice(0, 10);

  drawPoints(offersToRender);
  enableFilterForm();
  initFilterForm();
};

const onError = (errorMessage) => {
  showError(errorMessage);
};

disableForm();
disableFilterForm();


drawMap(() => {
  setInitialAddress();
  enableForm();
  initForm();
  loadOffers(onSuccess, onError);
});
