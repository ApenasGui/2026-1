import { 
    criar, 
    listar, 
    obter, 
    remover, 
    atualizar } from './client.js'

async function main() {
    const reposta = await criar({
        nome: "banana",
        preco: 0.99,
        unidade: "kg"
    })
    console.log(resposta);

    console.log("Listar produtos")
    reposta = await listar();
    console.log(reposta);

    console.log("Obter produto")
    reposta = await obter({
        id: 1
    });
    console.log(reposta);
    
    console.log("Atualizar produto")
    respota.nome = "banana prata";
    reposta.preco = 1.99;
    reposta = await atualizar(respota);
    console.log(reposta);

    console.log("Remover produto")
    reposta = await remover({
        id: 1
    });
    console.log(reposta);
};

main();