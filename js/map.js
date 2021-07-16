import { setEnableForm } from './form.js';
import { roomTypeToTitle } from './data.js';


const adderessInput = document.getElementById('address');
adderessInput.value = '35.68950,139.69171';
const map = L.map('map-canvas');

const createCustomPopup = (card) => {
  const mapCanvas = document.querySelector('#map-canvas');
  const offerTemplate = document.querySelector('#card').content;
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
  const templatePhoto = offerElement.querySelector('.popup__photo');
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
    offerFeatures.forEach((item) => {
      const element = document.createElement('li');
      element.classList.add('popup__feature', `popup__feature--${item}`);
      const featuresTemplate = offerFeatures.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');
      templateFeatures.innerHTML = featuresTemplate;
    });
  }

  if (!offerPhotos) {
    templatePhoto.remove();
  } else {
    templatePhoto.src = offerPhotos;
  }
  if (!avatar) {
    templateAvatar.remove();
  } else {
    templateAvatar.src = avatar;
  }
  mapCanvas.append(offerElement);
  return offerElement;
};


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
    adderessInput.value = `${(coordinates.lat).toFixed(5)},${(coordinates.lng).toFixed(5)}`;
  });
};


const drawPoints = (data) => {
  for(let i = 0; i <= 9; i++) {
    const mainPinIcon = L.icon({
      iconUrl: '/img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [26, 52],
    });

    const mainPinMarker = L.marker({
      lat: data[i].location.lat,
      lng: data[i].location.lng,
    }, {
      draggable: false,
      icon: mainPinIcon,
    });

    mainPinMarker.addTo(map)
      .bindPopup(
        createCustomPopup(data[i]),
      );
  }
  /*
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

    mainPinMarker.addTo(map)
      .bindPopup(
        createCustomPopup(element),
      );
  });
*/
};


export { drawMap, drawPoints, adderessInput };
