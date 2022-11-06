const refs = {
    valueEl: document.querySelector(`#value`),
    btnDecr: document.querySelector(`button[data-action = "decrement"]`),
    btnIncr: document.querySelector(`button[data-action = "increment"]`),
};

const counterValue = {
    value: 0,
    methodMinus() {
        this.value -= 1;
        return refs.valueEl.textContent = this.value;
    },

    methodPlus() {
        this.value += 1;
        return refs.valueEl.textContent = this.value;
    },
};

refs.btnDecr.addEventListener(`click`, counterValue.methodMinus.bind(counterValue));
refs.btnIncr.addEventListener(`click`, counterValue.methodPlus.bind(counterValue));





