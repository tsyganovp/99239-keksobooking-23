const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const DEFAULT_VALUE = 'any';

const filters = document.querySelector('.map__filters');
const housingType = document.getElementById('housing-type').value;
const housingPrice = document.getElementById('housing-price').value;
const housingRooms = document.getElementById('housing-rooms').value;
const housingGuests = document.getElementById('housing-guests').value;
const mapFeatures = document.querySelector('.map__features');
const housingFeatures = [...mapFeatures.querySelectorAll('input[type=checkbox]')];

const filterOffer = (data) => {
  let filteredData =[];

  data.forEach((element) => {

    if(element.offer.type === 'house') {
      filteredData.push(element);
    }
    if((element.offer.rooms).toString() === '3') {
      filteredData.push(element);
    }
    if((element.offer.guests).toString() === '2') {
      filteredData.push(element);
    }

    const priceMath = () => {

    };

  });

  console.log(filteredData);
};

export {filterOffer};
