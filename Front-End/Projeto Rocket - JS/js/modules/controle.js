export class ControleMissao {
    constructor() {
        this.foguete = null;
        this.satelite = null;
    }

    definirFoguete(foguete) {
        this.foguete = foguete;
    }

    definirSatelite(satelite) {
        this.satelite = satelite;
    }

    lancar() {
        if (!this.foguete) return "Sem foguete";

        this.foguete.lancar();

        if (this.satelite && this.foguete.status === "Em órbita") {
            this.satelite.ativar();
        }

        return this.getStatus();
    }

    getStatus() {
        return {
            foguete: this.foguete,
            satelite: this.satelite
        };
    }
}