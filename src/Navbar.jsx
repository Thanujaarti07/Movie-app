import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar custom-navbar fixed-top m-2'>
            <img src="/src/assets/movielogo-text.png" alt="logo" className='navlogo' />

            <div className='nav-links d-flex align-items-center me-5 '>
                <form className="d-flex me-3" role="search">
                    <input className="form-control me-2 bg-dark text-white custom-input" type="search"  name="search" placeholder="Search Here..." aria-label="Search"/>
                    <button className="btn btn-dark btn-hover" type="submit">Search</button>
                </form>
                <div className='hover-effect'>
                    <Link to="/" className='text-white text-decoration-none me-3 '>Home</Link>
                    <Link to="/login" className='text-white text-decoration-none me-3'>Login</Link>
                    <Link to="/favorites" className='text-white text-decoration-none me-3'>Favorites</Link>
                </div>
            </div>
        </nav>   
    </div>
  );
}

export default Navbar