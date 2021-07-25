let offers = [];

const getOffers = () => {
    return offers.slice(0);
};

const setOffers = (newOffers) => {
    offers = newOffers;
};


export {getOffers, setOffers};
