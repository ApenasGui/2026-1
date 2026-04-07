import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Notas(){
    const colunas = [
        "Disciplina",
        "A1",
        "A2",
        "A3",
        "Menção"
    ]

    const notas = [
        [
            ["BI e Datawarehouse", " 8.0" , " 0.0", " 0.0", " SR"],
            ["Construção Frontend", " 9.0" , "", "", " SR"],
            ["DevOps", "" , "", "", " SR"],
            ["Governança TI", "" , "", "", " SR"],
            ["Direito Ambiental", "" , "", "", " SR"],
        ],

        [
            ["DSA - Data Structure e Algoritmo", " 10" , " 0.0", " 0.0", " SR"],
            ["Construção Backend", " 0.0" , " 0.0", "0.0", "SR"],
            ["Gerenciamento de Projetos", " 0.0" , "0.0", "0.0", "SR"],
        ],

        [
            ["Dispositivos Mobile", "0.0" , "0.0", "0.0", "SR"],
            ["Engenharia de software", "0.0" , "0.0", "0.0", "SR"],
            ["Estatística", "0.0" , "0.0", "0.0", "SR"],
        ],

    ]


    return (
        <>
            <Sidebar />
            <Main
                titulo="Minhas Notas"
                subtitulo="Confira suas notas e desempenho acadêmico"
            >
                <Tabela titulo="2026.1" colunas={colunas} dados={notas[0]}/>
                <Tabela titulo="2025.1" colunas={colunas} dados={notas[1]}/>
                <Tabela titulo="2025.2" colunas={colunas} dados={notas[2]}/>
            </Main>
        </>
    )
}

export default Notas;