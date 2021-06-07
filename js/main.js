function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    //return 'Введите корректное число';
    throw new Error("Максимальное число меньше минимального");
  }
  if (max < min) {
    //return 'Максимальное число меньше минимального';
    throw new Error("Максимальное число меньше минимального");
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(1, 10);

function getRandomFloat(min, max, numbersAfter) {
  if (min < 0 || max < 0) {
    //return 'Введите корректное число';
    throw new Error("Введите корректное число");
  }
  if (max < min) {
    //return 'Максимальное число меньше минимального';
    throw new Error ("Максимальное число меньше минимального");
  }
  return (Math.random() * (max - min) + min).toFixed(numbersAfter);
}

getRandomFloat(1, 10, 2);

let avatarPicNumber = 8;
let maximumPerDayPrice = 1000;
let maximumRooms = 5;
let maximumGuests = 4;
const ROOM_TYPE = ["palace", "flat", "house", "bungalow", "hotel"];
const CHECK_IN_TIME = ["12:00", "13:00", "14:00"];
const CHECK_OUT_TIME = ["12:00", "13:00", "14:00"];
const FEATURES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
const createAuthor = () => {
  return {
    avatar: "img/avatars/user0" + getRandomIntInclusive(0, avatarPicNumber) + ".png".toString(),
  };
}


const createOffer = () => {
  return {
    title: "Сдается жилье!",
    address: "",
    price: getRandomIntInclusive(1, maximumPerDayPrice),
    type: ROOM_TYPE[getRandomIntInclusive(0, ROOM_TYPE.length - 1)],
    rooms: getRandomIntInclusive(1, maximumRooms),
    guests: getRandomIntInclusive(1, maximumGuests),
    checkin: getRandomIntInclusive(0, CHECK_IN_TIME.length - 1),
    checkout: getRandomIntInclusive(0, CHECK_OUT_TIME.length - 1),
    features: "",
    description: "Хороший вариант, Кекс одобряет!",
    photos: "",
  };
}

let lat_minimum = 35.65000;
let lat_maximum = 35.70000;
let lng_minimum = 139.70000;
let lng_maximum = 139.80000;

const createLocation =() => {
  return {
    lat: getRandomFloat(lat_minimum, lat_maximum, 4),
    lng: getRandomFloat(lng_minimum, lng_maximum, 4),
  };
}

console.log(createAuthor());
console.log(createOffer());
console.log(createLocation());

