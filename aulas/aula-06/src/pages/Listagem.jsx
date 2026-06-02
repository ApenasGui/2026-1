import { Link, useNavigate } from 'react-router';
import {useState, useEffect} from 'react';
import {listar} from '../services/produtoService';

function Listagem() {
    const [dados, setDados] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const carregar = async () => {
            const resposta = await listar();
            setDados(resposta);
        }
        carregar();
    }, []);

    return (
        <>
            <h1>Listagem de produtos</h1>
            <button onClick={() => navigate('/produtos/cadastrar')}>Adicionar</button>

            <table>
                <thead>
                    <tr>
                        <th>Nome do produto</th>
                        <th>Preço</th>
                        <th>Unidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.unidade}</td>
                            <td>
                                <Link to={`/produtos/editar/${produto.id}`}>Editar</Link>
                                 | 
                                <Link to={`/produtos/${produto.id}`}>Excluir</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Listagem;