import { roomType } from './data.js'; 



// TODO
// 1. Функция должна работать с единичным объектом
// 2. Все функции стрелочные
// 3. Избавиться от fragment'а, так как он нужен для вставки множества элементов в DOM
// 4. textContent = null => remove node element
// 5. features по разметке
const offerDraw = function (ADVERTISEMENTS) {
  for (let i = 0; i <= ADVERTISEMENTS.length - 1; i++) {
    const offerTemplate = document.querySelector('#card').content; // находим содержимое шаблона
    const offerCard = offerTemplate.querySelector('.popup'); // находим объявление
    // 3.
    const fragment = document.createDocumentFragment();
    const mapCanvas = document.querySelector('#map-canvas');
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

    ADVERTISEMENTS[i].offer.title = '';

    const offerTitle = ADVERTISEMENTS[i].offer.title;
    const offerAddress = ADVERTISEMENTS[i].offer.address;
    const offerPrice = `${ADVERTISEMENTS[i].offer.price} ₽/ночь`;
    const offerType = ADVERTISEMENTS[i].offer.type;
    const offerRooms = ADVERTISEMENTS[i].offer.rooms;
    const offerGuests = ADVERTISEMENTS[i].offer.guests;
    const offerCheckin = ADVERTISEMENTS[i].offer.checkin;
    const offerCheckout = ADVERTISEMENTS[i].offer.checkout;
    const offerFeatures = ADVERTISEMENTS[i].offer.features;
    const offerDescription = ADVERTISEMENTS[i].offer.description;
    const offerPhotos = ADVERTISEMENTS[i].offer.photos[i];
    const avatar = ADVERTISEMENTS[i].author.avatar;

    // 4
    if (!offerTitle) {
      templateTitle.textContent = null;
    } else {
      templateTitle.textContent = offerTitle;
    }

    if (!offerAddress) {
      templateAddress.textContent = null;
    } else {
      templateAddress.textContent = offerAddress;
    }

    if (!offerPrice) {
      templatePrice.textContent = null;
    } else {
      templatePrice.textContent = offerPrice;
    }

    if (offerType) {
      // templateType.textContent = roomType.get(offerType);
      templateType.textContent = roomType[offerType];
    }

    if (!offerRooms || !offerGuests) {
      templateGuests.textContent = null;
    } else {
      templateGuests.textContent = `${offerRooms} комнаты для ${offerGuests} гостей`;
    }

    if (!offerCheckin || !offerCheckout) {
      templateTime.textContent = '';
    } else {
      templateTime.textContent = `Заезд после ${offerCheckin}, выезд до ${offerCheckout}`;
    }

    if (!offerFeatures) {
      templateFeatures.textContent = '';
    } else {
      // 5
      templateFeatures.textContent = offerFeatures;
      
      // Очистить список
      templateFeatures.innerHTML = '';  
      // вывести свои
      

      // for (const feature of ADVERTISEMENTS[i].offer.features) {
        
      // }

      // .map()
      // function ()
      // () => {
      // }

      // const feature;
      // const element = document.createElement('li');
      // element.classList.add('popup__feature', `popup__feature--${feature}`);
      // return element;

      // `<li class="popup__feature popup__feature--${feature}"></li>`

      let featuresTemplate = offerFeatures.map((feature) => {
        return `<li class="popup__feature popup__feature--${feature}"></li>`;
      }).join('');
      
      templateFeatures.innerHTML = featuresTemplate;
      // .map - дает новый массив с изменениями по твоему алгоритму, не меняя длинны массива
      // .filter
      // есть ряд методов для проверок соответствия всех или одного любого элемента условию
    }

    if (!offerDescription) {
      templateDescription.textContent = null;
    } else {
      templateDescription.textContent = offerDescription;
    }

    templatePhoto.src = offerPhotos;
    templateAvatar.src = avatar;
    fragment.appendChild(offerElement);
    mapCanvas.appendChild(fragment);
  }
};


export { offerDraw };
