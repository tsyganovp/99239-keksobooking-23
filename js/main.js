import {
  createOffers
} from './data.js';
//eslint-disable-next-line no-unused-vars
import {
  setDisableForm,
  setFormValidation
} from './form.js';
import { drawMap, drawPoints } from './map.js';
import { getData } from './network.js';


//const offers = getData();
// eslint-disable-next-line no-console
//console.log(offers);
getData();
setDisableForm();
drawMap();
setFormValidation();
//showSuccsess();
