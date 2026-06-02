const url = "http://localhost:3000/produtos"

async function criar (produto){
    try{
        const resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(produto), // converte o javascript para JSON
            headers: {
                "content-type": "application/json"
            }
        });

        return await resposta.json();
    } catch (error) {
        return {
            message: "Oh Bob Esponja", error
        }
    }
};

async function obter (produto){
    try {
        const resposta = await fetch(`${url}/${produto.id}`);
        return await resposta.json();

    } catch (error) {
        return {
            message: "Doutor Nefário!", error
        }
    }

};

async function listar (){

    try {
        const resposta = fetch(url);
        return await resposta.json;
    } catch (error) {
        return {
            message: "Doutor Nefário!", error
        }
    }
};

async function atualizar (produto) {
    
    try {
        const resposta = fetch(url, {
            method: 'PUT',
            body: JSON.stringify(produto), // converte o javascript para JSON
            headers: {
                "content-type": "application/json"
            }
        });
        return await resposta.json();
    } catch (error) {
        return {
            message: "Doutor Nefário!", error
        }
    }
};

async function deletar (produto) {
    try {        
        const resposta = fetch(`${url}/${produto.id}`, {
        method: 'DELETE'
        });
        return await resposta.json();
    } catch (error) {
        return {
            message: "Doutor Nefário!", error
        }
    }
};

export {
    criar, 
    listar,
    obter,
    atualizar,
    deletar
}