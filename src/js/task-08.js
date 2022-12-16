const form = document.querySelector(`.login-form`);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === `` || password.value === ``) {
    return alert(`Заповнити всі поля`);
  }

  console.log({ elements: { email, password } });
  event.currentTarget.reset();
}

form.addEventListener(`submit`, onFormSubmit);

// `Email: ${email.value}, Password: ${password.value}`;
