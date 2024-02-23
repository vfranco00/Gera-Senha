import { nanoid } from "nanoid";

const passwordBtn = document.querySelector('button');
const passwordDisplay = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
    passwordDisplay.innerHTML = nanoid();
});


