const form = document.querySelector(`.login-form`)

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;


    const email = formEl.email.value;
    const password = formEl.password.value;

    const formInfo = {
        email,
        password
    }

    if (formInfo.email === `` || formInfo.password === ``) {
        return alert(`Заповнити всі поля`)
    }
    
    console.log(formInfo)
};

form.addEventListener(`submit`, onFormSubmit)