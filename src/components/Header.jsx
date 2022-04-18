import {Link} from 'react-router-dom';
const BookWard = require('./logos/BookWard.png')

function Header(){
    return(
        <div className="header">
            <img src={BookWard} alt="BookWard" border="0" className="logo" />
            <nav className="nav">
            <Link className="link" to='/'>Bookward</Link>
            <Link className="link" to='/books'>Books</Link>
            <Link className="link" to='/teachers'>Teachers</Link>
            </nav>
        </div>
    )
}

export default Header