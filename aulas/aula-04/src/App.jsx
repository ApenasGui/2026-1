import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import About from './pages/About';
import Settings from './pages/Settings';
import Error404 from './pages/Error404';
import Layout from './layouts/Layout';
import Login from './pages/Login';

export default function App() {
  return ( 
  <Routes>
    <Route path='/' element={<Layout />}> {}
      <Route index element={<Home />} />
      <Route path='perfil/:id' element={<Perfil />} />
      <Route path='settings' element={<Settings />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<Error404 />} />
    </Route>
    <Route path='login' element={<Login />} />
  </Routes>
  );
}