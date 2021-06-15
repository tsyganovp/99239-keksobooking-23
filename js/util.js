function getRandomIntInclusive(min, max) {
    if (min < 0 || max < 0) {
      throw new Error('Максимальное число меньше минимального');
    }
    if (max < min) {
      throw new Error('Максимальное число меньше минимального');
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  getRandomIntInclusive(1, 10);
  
  function getRandomFloat(min, max, numbersAfter) {
    if (min < 0 || max < 0) {
      throw new Error('Введите корректное число');
    }
    if (max < min) {
      throw new Error('Максимальное число меньше минимального');
    }
    return (Math.random() * (max - min) + min).toFixed(numbersAfter);
  }
  
  getRandomFloat(1, 10, 2);
  
  const featuresGenerator = function () {
    const featuresArray = [];
    for (let ind = 0; ind <= getRandomIntInclusive(1, featuresArrLength); ind++) {
      const random = FEATURES[Math.floor(Math.random() * FEATURES.length)];
      featuresArray[ind] = random;
    }
    return Array.from(new Set(featuresArray.map((item) => item.trim())));//поиск и удаление дублей из массива featuresArray
  };
  
  const photosGenerator = function () {
    const photosArray = new Array(numberOfPhotos).fill(null);
    for (let ind = 0; ind <= numberOfPhotos - 1; ind++) {
      photosArray[ind] = photos[getRandomIntInclusive(1, photos.length - 1)];
    }
    return photosArray;
  };
  
  const createAuthor = () => ({
    avatar: `img/avatars/user0${getRandomIntInclusive(0, avatarPicNumber)}${'.png'.toString()}`,
  });
  
  const createLocation = () => ({
    lat: getRandomFloat(latMinimum, latMaximum, 4),
    lng: getRandomFloat(lngMinimum, lngMaximum, 4),
  });
  
  const createOffer = () => ({
    title: 'Сдается жилье!',
    address: null,
    price: getRandomIntInclusive(1, maximumPerDayPrice),
    type: ROOM_TYPE[getRandomIntInclusive(0, ROOM_TYPE.length - 1)],
    rooms: getRandomIntInclusive(1, maximumRooms),
    guests: getRandomIntInclusive(1, maximumGuests),
    checkin: getRandomIntInclusive(0, CHECK_IN_TIME.length - 1),
    checkout: getRandomIntInclusive(0, CHECK_OUT_TIME.length - 1),
    features: featuresGenerator(),
    description: 'Хороший вариант, Кекс одобряет!',
    photos: photosGenerator(),
  });
  
  const advertisements = [];
  for (let ind = 0; ind <= 10; ind++) {
  
    const authorObj = createAuthor();
    const locationObj = createLocation();
    const offerObj = createOffer();
  
    offerObj.address = `${locationObj.lat  }, ${  locationObj.lng}`;
  
    const bookStay = {
      author: authorObj,
      offer: offerObj,
      location: locationObj,
    };
  
    advertisements.push(bookStay);
  
  }