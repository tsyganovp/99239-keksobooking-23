//import {getRandomIntInclusive, getRandomFloat, advertisementsArrayGenerator} from '.data.js';
import {createAuthor, createLocation,createOffer} from './data.js';
import {advertisementsArrayGenerator} from './util.js';
/*
getRandomIntInclusive(1, 10);
getRandomFloat(1, 10, 2);
advertisementsArrayGenerator();
*/
createAuthor();
createLocation();
createOffer();
advertisementsArrayGenerator();
