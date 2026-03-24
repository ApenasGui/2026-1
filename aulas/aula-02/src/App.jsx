import './App.css';
import logo from './assets/learn.svg';

function App(){
  return(
    <main>

      <img src={logo} alt="Logotipo do aluno online"/>
      <h1>Aluno Online</h1>

      <label htmlFor="matricula">Matrícula:</label>
      <input type="number" id="matricula" name="matricula"/>

      <label htmlFor="senha">Senha:</label>
      <input type="password" id="senha" name="senha"/>

      <button type="submit">Entrar</button>

    </main>
  );
}

export default App;