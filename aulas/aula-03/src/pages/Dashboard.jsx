import Card from "../components/Card";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    const avisos = [
        "Aulas presenciais retomam a partir de 24/02",
        "Prazo para matrícula: 31/03",
        "Novo calendário acadêmico já disponível"
    ];

    const datas = [
        "24/02: Retorno às aulas presenciais",
        "31/03: Prazo para matrícula",
        "27/04: Avaliação Frontend I"
    ]

    const disciplinas = [
        "Matemática Discreta",
        "Estruturas de Dados",
        "Sistemas Operacionais"
    ];

    return (
        <>
            <Sidebar />
            <Main 
                titulo="Olá aluno"
                subtitulo="Bem-vindo ao portal do aluno online!"
            >
                <Card titulo="Mural de avisos" itens={avisos} />
                <Card titulo="Calendário acadêmico" itens={datas} />
                <Card titulo="Minhas disciplinas" itens={disciplinas} />
            </Main>
        </>
    )
}

export default Dashboard;