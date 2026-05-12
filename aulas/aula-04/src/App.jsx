import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import About from './pages/About';
import Settings from './pages/Settings';
import Error404 from './pages/Error404';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import { useAuth } from './contexts/AuthContext';

export default function App() {
  const { logado } = useAuth();

  return ( 
  <Routes>
    {logado ? (
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='perfil/:id' element={<Perfil />} />
        <Route path='settings' element={<Settings />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error404 />} />
      </Route>
    ) : (
      <>
        <Route path='login' element={<Login />} />
        <Route path='logout' element={<Logout />} />
      </>
    )}
  </Routes>
  );
}