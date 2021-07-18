import {
  setDisableForm,
  setFormValidation
} from './form.js';
import { drawMap, filterOnChangeButton } from './map.js';
import { getData } from './api.js';


//const offers = [];

//const offers = getData();
// eslint-disable-next-line no-console
//console.log(offers);
getData();
setDisableForm();
drawMap();
filterOnChangeButton();
setFormValidation();

//showSuccsess();
