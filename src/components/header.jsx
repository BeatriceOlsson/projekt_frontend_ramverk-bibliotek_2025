
import { useDropdown } from '../hooks/dropdown'
import { Link } from 'react-router-dom';



export default function Header() {
    const {drop,shuldDrop}= useDropdown();

 return (
    <header className='bg-cyan-400 flex items-center justify-between rounded px-6 py-4 relative'>
        <menu className='relative m-0 p-0'>
            <button onClick={shuldDrop} 
            className='bg-blue-500 px-4 py-2 rounded shadow hover: bg-gray-100'
            >Meny</button>
            {drop && (
                <div className="absolute top-full left-0 bg-white shadow w-32 z-10">
                    <div className="bg-blue-500 block px-4 py-2 hover:bg-gray-100">
                        <a href="/">Home</a></div>
                    <div className="bg-blue-500 block px-4 py-2 hover:bg-gray-100">
                        <a href="/cart">Cart</a></div>
                </div>
            )}
        </menu>
        <Link to='/' className='absolute left-1/2 transform -translate-x-1/2'>
        <h1 className='text-3xl center'>Min e-handel</h1>
        </Link>
    </header>
 )   
}