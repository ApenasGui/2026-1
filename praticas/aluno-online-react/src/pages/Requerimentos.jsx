import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos(){
    return (
        <>
            <Sidebar />
            <main>
                <Topbar />
                <h2>Requerimentos</h2>
                <section>Documentos Pendentes</section>
                <section>Requerimentos em Andamento</section>
                <section>Requerimentos Finalizados</section>
            </main>
        </>
    );
};

export default Requerimentos;