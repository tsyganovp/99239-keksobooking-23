import {clearMap, drawPoints} from './map.js';
import { debounce } from './util.js';


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
const formSelects = mapFilter.querySelectorAll('select');
const housingTypeFilter = mapFilter.querySelector('#housing-type');
const priceFilter = mapFilter.querySelector('#housing-price');
const roomsAmountFilter = mapFilter.querySelector('#housing-rooms');
const guestsAmountFilter = mapFilter.querySelector('#housing-guests');
const featuresFilter = mapFilter.querySelector('#housing-features');

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

  for (let i = 0; i < offers.length; i++) {
    const {offer} = offers[i];

    if (isOfferMatchesFilter(offer)) {
      filteredOffers.push(offers[i]);
    }

    if (filteredOffers.length >= 10) {
      break;
    }
  }

  return filteredOffers;
};

const disableFilterForm = () => {
  mapFilter.classList.add('map__filters--disabled');
  formSelects.forEach((item) => {
    item.disabled = true;
  });
};

const enableFilterForm = () => {
  mapFilter.classList.remove('map__filters--disabled');
  formSelects.forEach((item) => {
    item.disabled = false;
  });
};


const initFilterForm = (data) => {
  const onFilterChangeWithDebounce = debounce(
    () => {
      clearMap();
      const filteredOffers = filterOffers(data);
      drawPoints(filteredOffers);
    },
    500,
  );

  mapFilter.addEventListener('change', onFilterChangeWithDebounce);
};

const resetFilters = () => {
  mapFilter.reset();  
}

export { filterOffers, disableFilterForm, enableFilterForm, mapFilter,initFilterForm,resetFilters};
