import { renderCard } from './offers.js';
import { createOffers } from './data.js';
import { setDisableForm, setEnableForm } from './form.js';


const offers = createOffers();
// eslint-disable-next-line no-console
console.log(offers);

renderCard(offers[1]);
setDisableForm();
//setEnable();



// Result
// const offers =;
// console.log(offers);
// renderCard(offers[0]);

// setDisableForm();
// // setEnable();
