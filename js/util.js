const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('Максимальное число меньше минимального');
  }
  if (max < min) {
    throw new Error('Максимальное число меньше минимального');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, numbersAfter) => {
  if (min < 0 || max < 0) {
    throw new Error('Введите корректное число');
  }
  if (max < min) {
    throw new Error('Максимальное число меньше минимального');
  }
  return (Math.random() * (max - min) + min).toFixed(numbersAfter);
};


export {getRandomIntInclusive, getRandomFloat};
