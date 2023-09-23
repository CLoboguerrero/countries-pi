import './Nav.modules.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        <nav className='nav-bar'>
            <div className='nav-links'>
                <p><Link to = '/home'>Home</Link></p>
                <p><Link to = '/countries'>Country Finder</Link></p>
                <p><Link to = '/visited'>Visited Countries</Link></p>
                <p><Link to = '/activities'>Activities</Link></p>
                <p><Link to = '/about'>About</Link></p>
            </div>
            <SearchBar />
        </nav>
    );
}

export default Nav;