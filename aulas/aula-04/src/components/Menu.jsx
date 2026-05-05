import { Link, NavLink } from "react-router"
import "./Menu.css";

export default function Menu() {
    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/perfil">Perfil</NavLink></li>
            <li><NavLink to="/settings">Configurações</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
}