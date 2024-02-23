import { nanoid } from "nanoid";
import "./style.css";

const passwordBtn = document.querySelector('button');
const passwordDisplay = document.querySelector('h2');
const copyPassword = document.querySelector('.password');

passwordBtn.addEventListener('click', () => {
    passwordDisplay.innerHTML = nanoid();
});

copyPassword.addEventListener('click', () => {
    // Cria um elemento de texto temporário
    var tempInput = document.createElement("input");
    // Define o valor do elemento de texto como o texto a ser copiado
    tempInput.value = passwordDisplay.textContent;
    // Adiciona o elemento temporário à página
    document.body.appendChild(tempInput);
    // Seleciona o texto dentro do elemento de texto
    tempInput.select();
    // Copia o texto para a área de transferência
    document.execCommand("copy");
    // Remove o elemento temporário da página
    document.body.removeChild(tempInput);
    alert("Password copied");
})



