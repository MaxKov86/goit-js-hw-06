const inputEl = document.querySelector(`#validation-input`);
const symbolEl = Number(inputEl.dataset.length);




const onInputBlur = event => {
    
    if (event.currentTarget.value.length === symbolEl) {
        inputEl.classList.add(`valid`);
        inputEl.classList.remove(`invalid`)
    } else {
        inputEl.classList.add(`invalid`);
        inputEl.classList.remove(`valid`)
    }
    
};

inputEl.addEventListener(`blur`, onInputBlur);