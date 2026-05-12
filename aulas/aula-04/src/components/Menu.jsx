import { Link, NavLink } from "react-router"
import { useAuth } from "../contexts/AuthContext";
import "./Menu.css";

export default function Menu() {
    const userId = 0;
    const {user} = useAuth();

    return <nav>
        <h1>Olá, {user.nome}!</h1>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={`/perfil/${userId}`}>Perfil</NavLink></li>
            <li><NavLink to="/settings">Configurações</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
    </nav>
}