import avatar from '../assets/avatar.svg';

function Topbar() {

    return (
          <header className='p-2 flex flex-row justify-between items-center'>
            <h1 className='text-lg font-bold'>Olá, Aluno!</h1>
            <img src={avatar} alt="Avatar" className='size-10'/>
          </header>
          );
}

export default Topbar;