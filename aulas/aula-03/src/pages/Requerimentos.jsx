import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos(){
    return (
        <div>
            <Sidebar />
            <main>
                <Topbar />
                <h2>Requerimentos</h2>
                <section>Documentos Pendentes</section>
            </main>
        </div>
    );
};

export default Requerimentos;