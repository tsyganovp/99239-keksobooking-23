import {
  setEnableForm
} from './form.js';
import {
  createOffers
} from './data.js';


const addersInput = document.getElementById('address');
addersInput.value = '35.68950,139.69171';
const map = L.map('map-canvas');

const drawMap = () => {
  map
    .on('load', () => {
      setEnableForm();
    })
    .setView({
      lat: 35.6895000,
      lng: 139.6917100,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  const mainPinIcon = L.icon({
    iconUrl: '/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker({
    lat: 35.6895000,
    lng: 139.6917100,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    // eslint-disable-next-line no-console
    addersInput.value = `${(coordinates.lat).toFixed(5)},${(coordinates.lng).toFixed(5)}`;
  });
};

const drawPoints = (data) => {
  data.forEach((element) => {
    const mainPinIcon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });

    const mainPinMarker = L.marker({
      lat: element.location.lat,
      lng: element.location.lng,
    }, {
      draggable: false,
      icon: mainPinIcon,
    });

    mainPinMarker.addTo(map);
  });
};

export {
  drawMap,
  drawPoints
};
