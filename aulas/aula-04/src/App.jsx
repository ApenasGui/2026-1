import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import About from './pages/About';
import Settings from './pages/Settings';
import Error404 from './pages/Error404';
import Layout from './layouts/Layout';

export default function App() {
  return ( 
  <Routes>
    <Route element={<Layout />}> {}
      <Route path='/' element={<Home />} />
      <Route path='perfil' element={<Perfil />} />
      <Route path='settings' element={<Settings />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<Error404 />} />
    </Route>
  </Routes>
  );
}