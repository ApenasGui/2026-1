import { useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext";

export default function Logout() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");  
    }

    return <>
    <h1>Logout</h1>
    <button onClick={handleLogout}>Sair</button>
    </>
}