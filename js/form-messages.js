const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const messageSuccess = successMessageTemplate.cloneNode(true);
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const messageError = errorMessageTemplate.cloneNode(true);
const body = document.querySelector('body');
const errorButton = errorMessageTemplate.querySelector('.error__button');

const showSuccsess = () => {
  body.appendChild(messageSuccess);
};
const showError = () => {
  body.appendChild(messageError);
};


export {showSuccsess,showError};
