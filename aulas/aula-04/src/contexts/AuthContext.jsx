import { useState, createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [logado, setLogado] = useState(false);

    const login = (dados) => {
        setUser({nome: dados.nome, email: dados.email});
        setLogado(true);
    }

    const logout = () => {
        setUser({});
        setLogado(false);
    }

    return <AuthContext.Provider value={{ logado, user, login, logout }}>
        {children}
    </AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export {useAuth, AuthProvider};