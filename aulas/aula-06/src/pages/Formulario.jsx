import {useForm} from 'react-hook-form';
import {Link, useNavigate} from 'react-router';
import {criar} from '../services/produtoService';
import { useState } from 'react';

function Formulario() {
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState();
    const salvar = async (dados) => {
        try {
            await criar(dados);
            navigate('/produtos');
        } catch (error) {
            setError(error.message);
        }
        navigate('/produtos');
    }

    return (
        <>
            <h1>Formulário</h1>
            <form onSubmit={handleSubmit(salvar)}>
                <input type="text" placeholder="Nome do produto" {...register('nome')} />
                <input type="number" placeholder="Preço" {...register('preco')} />
                <input type="text" placeholder="Unidade" {...register('unidade')} />
                <Link to="/produtos">Cancelar</Link>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
}

export default Formulario;