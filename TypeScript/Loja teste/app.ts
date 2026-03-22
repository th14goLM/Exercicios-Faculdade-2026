// 1. Definimos como deve ser um Produto (Documentação: Interface)
interface Produto {
    id: number;
    nome: string;
    preco: number;
}

// 2. Criamos a nossa lista de stock vazia
const inventario: Produto[] = [];

// 3. Função para adicionar produtos (Documentação: Método de inserção)
function adicionarAoInventario(id: number, nome: string, preco: number): void {
    const novoItem: Produto = { id, nome, preco };
    inventario.push(novoItem);
    console.log(`Sucesso: O item "${nome}" foi adicionado!`);
}

// 4. Testando o nosso app
adicionarAoInventario(1, "Produto Exemplo", 25.99);
adicionarAoInventario(2, "Serviço Premium", 150.90);
adicionarAoInventario(3, "Atendimento Deluxe", 245.70)

// 5. Mostrar o resultado final
console.table(inventario);