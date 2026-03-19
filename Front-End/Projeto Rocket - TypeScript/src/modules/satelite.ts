import { Status } from "../types/status";

export class Satelite {
    nome: string;
    massa: number;
    status: Status;

    constructor(nome: string, massa: number) {
        this.nome = nome;
        this.massa = massa;
        this.status = "Em solo";
    }

    ativar(): void {
        this.status = "Ativo";
    }
}