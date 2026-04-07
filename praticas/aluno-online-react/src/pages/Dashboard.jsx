import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Dashboard() {
    return (
        <>
            <Sidebar />
            <Main 
                titulo="Olá aluno"
                subtitulo="Bem-vindo ao portal do aluno online!"
            >
                <Card titulo="Mural de avisos" />
                <Card titulo="Calendário acadêmico" />
                <Card titulo="Minhas disciplinas" />
            </Main>
        </>
    )
}

export default Dashboard;