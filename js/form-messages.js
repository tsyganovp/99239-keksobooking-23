const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const messageSuccess = successMessageTemplate.cloneNode(true);



const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');


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

const showError = (errorMessage) => {
  const messageError = errorMessageTemplate.cloneNode(true);
  const text = messageError.querySelector('.error__message');
  text.textContent = errorMessage;
  const errorButton = errorMessageTemplate.querySelector('.error__button');

  const onKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      closeMessage();
    }
  }

  const closeMessage = () => {
    document.removeEventListener('keydown', onKeyDown);
    messageError.remove();
  }

  document.addEventListener('keydown', onKeyDown);

  messageError.addEventListener('click', () => {
    closeMessage();
  });

  document.body.appendChild(messageError);
};


export {showSuccsess, showError};
