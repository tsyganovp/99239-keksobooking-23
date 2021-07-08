import { offerDraw } from './offers.js';
import {createOffers} from './data.js';
import {setDisable,setEnable} from './form.js';


offerDraw(createOffers());
setDisable();
setEnable();
