let offers = [];

const getOffers = () => offers.slice(0);

const setOffers = (newOffers) => {
  offers = newOffers;
};


export { getOffers, setOffers };
