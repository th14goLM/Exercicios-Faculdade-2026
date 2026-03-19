import { Foguete } from "./modules/foguete";
import { Satelite } from "./modules/satelite";
import { ControleMissao } from "./modules/centroControle";

const controle = new ControleMissao();

let foguete: Foguete;
let satelite: Satelite;

const output = document.getElementById("output") as HTMLPreElement;

(document.getElementById("criarFoguete") as HTMLButtonElement).onclick = () => {
    const nome = (document.getElementById("nomeFoguete") as HTMLInputElement).value;
    const combustivel = Number((document.getElementById("combustivel") as HTMLInputElement).value);

    foguete = new Foguete(nome, combustivel);
    controle.definirFoguete(foguete);

    atualizar();
};

(document.getElementById("criarSatelite") as HTMLButtonElement).onclick = () => {
    const nome = (document.getElementById("nomeSatelite") as HTMLInputElement).value;
    const massa = Number((document.getElementById("massa") as HTMLInputElement).value);

    satelite = new Satelite(nome, massa);
    controle.definirSatelite(satelite);

    atualizar();
};

(document.getElementById("lancar") as HTMLButtonElement).onclick = () => {
    controle.lancar();
    atualizar();
};

function atualizar(): void {
    output.textContent = JSON.stringify(controle.getStatus(), null, 2);
}