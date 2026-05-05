import { Link, NavLink } from "react-router"
import "./Menu.css";

export default function Menu() {
    const userId = 0;

    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={`/perfil/${userId}`}>Perfil</NavLink></li>
            <li><NavLink to="/settings">Configurações</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
}