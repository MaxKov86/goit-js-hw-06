const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

console.log(input);
console.log(output);

const outputChange = event => {

    output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ``) {
       output.textContent = `Anonymous`;
    }
}

input.addEventListener(`input`, outputChange);

console.log(output.textContent);

