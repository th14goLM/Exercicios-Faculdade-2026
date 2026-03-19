export class Foguete {
    constructor(nome, combustivel) {
        this.nome = nome;
        this.combustivel = combustivel;
        this.status = "Em solo";
    }

    lancar() {
        if (this.combustivel > 50) {
            this.status = "Em órbita";
        } else {
            this.status = "Falha no lançamento";
        }
    }
}