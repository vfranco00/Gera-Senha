import { nanoid } from "nanoid";
import "./style.css";

const passwordBtn = document.querySelector('button');
const passwordDisplay = document.querySelector('h2');
const copyPassword = document.querySelector('#copyButton');
const passwordLgthRange = document.querySelector('input');
const passwordLgtNumber = document.querySelector('#numberPassword');

passwordBtn.addEventListener('click', () => {
    var tempLength = passwordLgthRange.value;
    console.log(tempLength);
    passwordDisplay.innerHTML = nanoid(tempLength);
});

passwordLgthRange.addEventListener('click', () => {
    var tempLengthRange = passwordLgthRange.value;
    console.log(tempLengthRange);
    passwordLgtNumber.value = tempLengthRange; 
});

copyPassword.addEventListener('click', () => {
    var tempInput = document.createElement("input");
    tempInput.value = passwordDisplay.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Password copied");
});
