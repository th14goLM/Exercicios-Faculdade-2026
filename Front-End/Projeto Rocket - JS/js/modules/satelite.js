export class Satelite {
    constructor(nome, massa) {
        this.nome = nome;
        this.massa = massa;
        this.status = "Em solo";
    }

    ativar() {
        this.status = "Ativo";
    }
}