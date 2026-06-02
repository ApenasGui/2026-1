import { 
    criar, 
    listar, 
    obter, 
    remover, 
    atualizar } from '../client.js'

async function main() {
    let resposta = await criar({
        nome: "banana",
        preco: 0.99,
        unidade: "kg"
    })
    console.log(resposta);

    console.log("Listar produtos")
    resposta = await listar();
    console.log(resposta);

    console.log("Obter produto")
    resposta = await obter({
        id: 1
    });
    console.log(resposta);
    
    console.log("Atualizar produto")
    resposta.nome = "banana prata";
    resposta.preco = 1.99;
    resposta = await atualizar(resposta);
    console.log(resposta);

    console.log("Remover produto")
    resposta = await remover({
        id: 1
    });
    console.log(resposta);
};

main();