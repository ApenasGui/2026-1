import learn from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar() {
    return (
        <aside className='hidden md:block bg-gray-300 w-64 p-4'>
              <header className='flex flex-row justify-between items-center'>
                <img src={learn} alt="Logo" />
                <h1>Aluno Online</h1>
              </header>
              <Menu />
        </aside>
    )
}

export default Sidebar;