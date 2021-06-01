function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    return 'Введите корректное число';
  }
  if (max < min) {
    return 'Максимальное число меньше минимального';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive(10,1);

function getRandomFloat(min, max, numbersAfter) {
  if (min < 0 || max < 0) {
    return 'Введите корректное число';
  }
  if (max < min) {
    return 'Максимальное число меньше минимального';
  }
  return (Math.random() * (max - min) + min).toFixed(numbersAfter);
}

getRandomFloat(1,10,2);
