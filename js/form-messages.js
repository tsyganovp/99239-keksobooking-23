const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');


const onEscKeydown = (handler, evt) => {
  if (evt.key === 'Escape') {
    handler();
  }
};

const closeMessage = (messageElement, onMessageEscKeydown) => {
  document.removeEventListener('keydown', onMessageEscKeydown);
  messageElement.remove();
};


const showSuccess = () => {
  const messageSuccess = successMessageTemplate.cloneNode(true);

  const onMessageKeydown = onEscKeydown.bind(this, () => {
    closeMessage(messageSuccess, onMessageKeydown);
  });

  document.addEventListener('keydown', onMessageKeydown);

  messageSuccess.addEventListener('click', () => {
    closeMessage(messageSuccess, onMessageKeydown);
  });

  document.body.appendChild(messageSuccess);
};


const showError = (errorMessage) => {
  const messageError = errorMessageTemplate.cloneNode(true);
  const text = messageError.querySelector('.error__message');
  text.textContent = errorMessage;
  
  const onMessageKeydown = onEscKeydown.bind(this, () => {
    closeMessage(messageError, onMessageKeydown);
  });

  document.addEventListener('keydown', onMessageKeydown);

  messageError.addEventListener('click', () => {
    closeMessage(messageError, onMessageKeydown);
  });

  document.body.appendChild(messageError);
};


export {showSuccess, showError};
