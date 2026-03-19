import { Foguete } from "./foguete";
import { Satelite } from "./satelite";

export class ControleMissao {
    foguete: Foguete | null = null;
    satelite: Satelite | null = null;

    definirFoguete(f: Foguete): void {
        this.foguete = f;
    }

    definirSatelite(s: Satelite): void {
        this.satelite = s;
    }

    lancar(): void {
        if (!this.foguete) return;

        this.foguete.lancar();

        if (this.satelite && this.foguete.status === "Em órbita") {
            this.satelite.ativar();
        }
    }

    getStatus() {
        return {
            foguete: this.foguete,
            satelite: this.satelite
        };
    }
}