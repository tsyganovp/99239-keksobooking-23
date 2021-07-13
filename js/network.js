import { drawPoints } from "./map.js";
const URL_API = 'https://23.javascript.pages.academy/keksobooking';

const getData = () => {
  fetch(`${URL_API}/data`)
    .then((response) => response.json())
    .then((data) => {
      drawPoints(data);
    });
};


export{getData};
