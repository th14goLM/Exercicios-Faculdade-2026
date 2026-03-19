import { Foguete } from './modules/foguete.js';
import { Satelite } from './modules/satelite.js';
import { ControleMissao } from './modules/controle.js';

const controle = new ControleMissao();

let foguete;
let satelite;

const output = document.getElementById("output");

document.getElementById("criarFoguete").onclick = () => {
    const nome = document.getElementById("nomeFoguete").value;
    const combustivel = Number(document.getElementById("combustivel").value);

    foguete = new Foguete(nome, combustivel);
    controle.definirFoguete(foguete);

    atualizar();
};

document.getElementById("criarSatelite").onclick = () => {
    const nome = document.getElementById("nomeSatelite").value;
    const massa = Number(document.getElementById("massa").value);

    satelite = new Satelite(nome, massa);
    controle.definirSatelite(satelite);

    atualizar();
};

document.getElementById("lancar").onclick = () => {
    controle.lancar();
    atualizar();
};

function atualizar() {
    output.textContent = JSON.stringify(controle.getStatus(), null, 2);
}