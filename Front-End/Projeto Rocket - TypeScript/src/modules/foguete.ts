import { Status } from "../types/status";

export class Foguete {
    nome: string;
    combustivel: number;
    status: Status;

    constructor(nome: string, combustivel: number) {
        this.nome = nome;
        this.combustivel = combustivel;
        this.status = "Em solo";
    }

    lancar(): void {
        if (this.combustivel > 50) {
            this.status = "Em órbita";
        } else {
            this.status = "Falha";
        }
    }
}