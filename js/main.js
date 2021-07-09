import {
  createOffers
} from './data.js';
//eslint-disable-next-line no-unused-vars
import {
  setDisableForm,
  setFormValidation
} from './form.js';
import { drawMap, drawPoints } from './map.js';

const offers = createOffers();
// eslint-disable-next-line no-console
console.log(offers);
setDisableForm();
drawMap();
drawPoints(offers);
setFormValidation();
