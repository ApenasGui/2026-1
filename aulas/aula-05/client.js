const url = "http://localhost:5173/produtos"

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
            message: "Oh Bob Esponja"
        }
    }
};

async function obter (produto){
    try {
        const resposta = await fetch(`${url}/${produto.id}`);
        return await resposta.json();

    } catch (error) {
        return {
            message: "Doutor Nefário!"
        }
    }

};

async function listar (){

    try {
        const resposta = fetch(url);
        return await resposta.json;
    } catch (error) {
        return {
            message: "Doutor Nefário!"
        }
    }
};

async function atualizar (){
    
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
            message: "Doutor Nefário!"
        }
    }
};

async function deletar () {
    try {        
        const resposta = fetch(`${url}/${produto.id}`, {
        method: 'DELETE'
        });
        return await resposta.json();
    } catch (error) {
        return {
            message: "Doutor Nefário!"
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