const MAX_PRICE = 1000000;
const FILTER_VALUE_ANY = 'any';
const priceRanges = {
  low: {
    MIN: 0,
    MAX: 9999,
  },
  middle: {
    MIN: 10000,
    MAX: 49999,
  },
  high: {
    MIN: 50000,
    MAX: MAX_PRICE,
  },
};

const mapFilter = document.querySelector('.map__filters');
const housingTypeFilter = mapFilter.querySelector('#housing-type');
const priceFilter = mapFilter.querySelector('#housing-price');
const roomsAmountFilter = mapFilter.querySelector('#housing-rooms');
const guestsAmountFilter = mapFilter.querySelector('#housing-guests');
const featuresFilter = mapFilter.querySelector('#housing-features');


// TODO Фильтрация
// 1. Фильтрация должна происходить с помощью цикла for для реализации своевременного выхода из массива
// https://up.htmlacademy.ru/javascript/23/criteries#b23
// https://up.htmlacademy.ru/javascript/23/project/keksobooking#keksobooking-5-9
//
//
const isPriceInRange = (price, range) => {
  if (range === FILTER_VALUE_ANY) {
    return true;
  }

  return price > priceRanges[range].MIN && price < priceRanges[range].MAX;
};

const isValueMatchesFilter = (property, filter) => {
  let filterValue = filter.value;
  if (filterValue !== FILTER_VALUE_ANY && filter !== housingTypeFilter) {
    filterValue = Number(filter.value);
  }

  return filterValue === FILTER_VALUE_ANY || property === filterValue;
};

const areFeaturesMatchFilter = (features = []) => {
  const filteredFeatures = featuresFilter.querySelectorAll('input[type="checkbox"]:checked');
  return [...filteredFeatures].every((feature) => features.includes(feature.value));
};

const isOfferMatchesFilter = (offer) => {
  const { type, price, rooms, guests, features } = offer;
  return isValueMatchesFilter(type, housingTypeFilter) &&
    isPriceInRange(price, priceFilter.value) &&
    isValueMatchesFilter(rooms, roomsAmountFilter) &&
    isValueMatchesFilter(guests, guestsAmountFilter) &&
    areFeaturesMatchFilter(features);
};

const filterOffers = (offers) => {
  const filteredOffers = [];
  for (let i = 0; i < 10; i++) {
    const {offer} = offers[i];
    if (isOfferMatchesFilter(offer)) {
      filteredOffers.push(offers[i]);
    }
  }
  //console.log(filteredOffers)
  return filteredOffers;
};


export { filterOffers, mapFilter };
//arr.filter()


// const test = [1, 2, 3 , 4, -2, -5, 1];
// const test2 = test.filter((number) => {
//   if (number >= 0) {
//     return true;
//   } else {
//     return false;
//   }

//   return number >= 0;
// });


// const test2 = test.filter(number => number >= 0);
