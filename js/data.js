const avatarPicNumber = 8;
const maximumPerDayPrice = 1000;
const maximumRooms = 5;
const maximumGuests = 4;
const ROOM_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN_TIME = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const featuresArrLength = FEATURES.length;
const numberOfPhotos = 10;

const latMinimum = 35.65000;
const latMaximum = 35.70000;
const lngMinimum = 139.70000;
const lngMaximum = 139.80000;


export {avatarPicNumber, maximumPerDayPrice, maximumRooms, maximumGuests, 
    ROOM_TYPE, CHECK_IN_TIME, CHECK_OUT_TIME, photos, featuresArrLength, 
    numberOfPhotos, latMinimum, latMaximum, lngMinimum, lngMaximum};
