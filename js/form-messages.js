const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');


const showSuccsess = () => {
  const messageSuccess = successMessageTemplate.cloneNode(true);

  const closeMessage = () => {
    const onKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        closeMessage();
      }
    };

    document.removeEventListener('keydown', onKeyDown);
    messageSuccess.remove();
  };

  document.addEventListener('keydown', onKeyDown);

  messageSuccess.addEventListener('click', () => {
    closeMessage();
  });

  document.body.appendChild(messageSuccess);
};


const showError = (errorMessage) => {
  const messageError = errorMessageTemplate.cloneNode(true);
  const text = messageError.querySelector('.error__message');
  text.textContent = errorMessage;
  const errorButton = errorMessageTemplate.querySelector('.error__button');

  const closeMessage = () => {
    const onKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        closeMessage();
      }
    }

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
