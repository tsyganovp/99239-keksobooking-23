import { renderCard } from './offers.js';
import { createOffers } from './data.js';
//eslint-disable-next-line no-unused-vars
import { setDisableForm, setEnableForm,setFormValidation } from './form.js';


const offers = createOffers();
// eslint-disable-next-line no-console
console.log(offers);

renderCard(offers[1]);
setDisableForm();
setEnableForm();

setFormValidation();


// Result
// const offers =;
// console.log(offers);
// renderCard(offers[0]);

// setDisableForm();
// // setEnable();
//