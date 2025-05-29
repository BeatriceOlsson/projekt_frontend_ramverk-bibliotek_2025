import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className='bg-cyan-400 flex items-center justify-between rounded px-6 py-4 relative'>
            <div className="text-1xl center">
                <p>Develop for stydy porpuse</p>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <Link to='/' className="">
                    <li>Home</li>
                    </Link>
                    <Link to='/cart'>
                    <li>Shoping Cart</li>
                    </Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;