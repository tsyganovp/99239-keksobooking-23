

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccess = successMessageTemplate.cloneNode(true);
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const messageError = errorMessageTemplate.cloneNode(true);
const body = document.querySelector('body');
const errorButton = errorMessageTemplate.querySelector('.error__button');


const showSuccsess = () => {
  body.appendChild(messageSuccess);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      body.removeChild(messageSuccess);
    }
  });
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.removeChild(messageSuccess);
  });
};
const showError = () => {
  body.appendChild(messageError);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      body.removeChild(messageError);
    }
  });
  document.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.removeChild(messageError);
  });
  errorButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.removeChild(messageError);
  });
};


export {
  showSuccsess,
  showError
};
