import { initMenu } from './modules/menu.js';

document.addEventListener("DOMContentLoaded", () => {
    console.log("App iniciado 🚀");

    initMenu();

    const btn = document.getElementById("btnClick");

    btn.addEventListener("click", () => {
        alert("Funcionando!");
    });
});