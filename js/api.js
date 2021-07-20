const URL_API = ' https://23.javascript.pages.academy/keksobooking';

const getOffers = (onSuccess, onError) => {
  fetch(`${URL_API}/data`)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error('Ошибка при получении данных');
    })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error.message);
    });
};

const sendData = (data, onSuccess, onError) => {
  fetch(URL_API, {
    method: 'POST',
    body: data,
  })
  .then((response) => {
    if(response.ok) {
      onSuccess();
      return;
    }

    throw new Error('Ошибка размещения объявления');
  })
  .catch((error) => {
    onError(error.message);
  });
};


export {getOffers,sendData};
