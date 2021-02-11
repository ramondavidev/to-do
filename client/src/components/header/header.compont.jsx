import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div>
                    <Link className='nav-link' to='/'>Home</Link>
                </div>
                <div>
                    <Link className='nav-link' to='/to-do'>To-Do</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;