import { roomTypeToTitle } from './data.js';
import { setAddress } from './form.js';


const INITIAL_ADDRESS = {
  lat: 35.68950,
  lng: 139.69171,
};

const offerTemplate = document.querySelector('#card').content;

const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker =  L.marker({
  lat: INITIAL_ADDRESS.lat,
  lng: INITIAL_ADDRESS.lng,
}, {
  draggable: true,
  icon: mainPinIcon,
});


const createCustomPopup = (card) => {
  const offerCard = offerTemplate.querySelector('.popup');
  const offerElement = offerCard.cloneNode(true);
  const templateTitle = offerElement.querySelector('.popup__title');
  const templateAddress = offerElement.querySelector('.popup__text--address');
  const templatePrice = offerElement.querySelector('.popup__text--price');
  const templateType = offerElement.querySelector('.popup__type');
  const templateGuests = offerElement.querySelector('.popup__text--capacity');
  const templateTime = offerElement.querySelector('.popup__text--time');
  const templateFeatures = offerElement.querySelector('.popup__features');
  const templateDescription = offerElement.querySelector('.popup__description');
  const templatePhotos = offerElement.querySelector('.popup__photos');
  const templateAvatar = offerElement.querySelector('.popup__avatar');
  const offerTitle = card.offer.title;
  const offerAddress = card.offer.address;
  const offerPrice = card.offer.price;
  const offerType = card.offer.type;
  const offerRooms = card.offer.rooms;
  const offerGuests = card.offer.guests;
  const offerCheckin = card.offer.checkin;
  const offerCheckout = card.offer.checkout;
  const offerFeatures = card.offer.features;
  const offerDescription = card.offer.description;
  const offerPhotos = card.offer.photos;
  const avatar = card.author.avatar;

  if (!offerTitle) {
    templateTitle.remove();
  } else {
    templateTitle.textContent = offerTitle;
  }

  if (!offerAddress) {
    templateAddress.remove();
  } else {
    templateAddress.textContent = offerAddress;
  }
  if (!offerPrice) {
    templatePrice.remove();
  } else {
    templatePrice.textContent = `${offerPrice} ₽/ночь`;
  }

  if (!offerType) {
    templateType.remove();
  } else {
    templateType.textContent = roomTypeToTitle[offerType];
  }

  if (!offerRooms || !offerGuests) {
    templateGuests.remove();
  } else {
    templateGuests.textContent = `${offerRooms} комнаты для ${offerGuests} гостей`;
  }

  if (!offerCheckin || !offerCheckout) {
    templateTime.remove();
  } else {
    templateTime.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
  }

  if (!offerDescription) {
    templateDescription.remove();
  } else {
    templateDescription.textContent = offerDescription;
  }

  if (!offerFeatures) {
    templateFeatures.remove();
  } else {
    templateFeatures.innerHTML = '';
    const fragment = document.createDocumentFragment();
    offerFeatures.forEach((item) => {
      const element = document.createElement('li');
      element.classList.add('popup__feature', `popup__feature--${item}`);
      fragment.appendChild(element);
    });
    templateFeatures.appendChild(fragment);
  }

  if (!offerPhotos || offerPhotos.length === 0) {
    templatePhotos.remove();
  } else {
    templatePhotos.innerHTML = '';
    const fragment = document.createDocumentFragment();
    offerPhotos.forEach((photo) => {
      const img = new Image(45, 40);
      img.classList.add('popup__photo');
      img.src = photo;
      img.alt = 'Фотография жилья';
      fragment.appendChild(img);
    });
    templatePhotos.appendChild(fragment);
  }

  if (!avatar) {
    templateAvatar.remove();
  } else {
    templateAvatar.src = avatar;
  }

  return offerElement;
};

const markerGroup = L.layerGroup().addTo(map);

/**
 * Инициализация карты
 */
const drawMap = (onReady) => {
  map.on('load', onReady).setView({
    lat: 35.67510,
    lng: 139.72200,
  }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    setAddress(coordinates.lat, coordinates.lng);
  });
};


const clearMap = () => {
  markerGroup.clearLayers();
};


const drawPoints = (data) => {
  data.forEach((offer) => {
    const mainPinIcon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [26, 52],
    });

    const mainPinMarker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    }, {
      draggable: false,
      icon: mainPinIcon,
    });

    mainPinMarker.addTo(markerGroup).bindPopup(
      createCustomPopup(offer),
    );
  });
};


const setInitialAddress = () => {
  const initialLatLng = new L.LatLng(INITIAL_ADDRESS.lat, INITIAL_ADDRESS.lng);
  mainPinMarker.setLatLng(initialLatLng);
  setAddress(INITIAL_ADDRESS.lat, INITIAL_ADDRESS.lng);
};


export {drawMap, drawPoints, clearMap, setInitialAddress};
