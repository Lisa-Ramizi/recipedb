import { Link } from 'react-scroll';


function Navbar({ onLoginClick, isLoggedIn, onLogoutClick }) {
  const navbarStyle = {
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  const linksStyle = {
    display: 'flex',
    gap: '20px',
  };

  return (
    <nav style={navbarStyle} className="navbar">
      <div className="navbar-left">
        <div style={linksStyle}>
          <Link to="/" className="btn btn-link text-light" >Home</Link>
          <Link className="btn btn-link text-light" >About</Link>
          <Link className="btn btn-link text-light">Recipes</Link>
        </div>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <button
            className="btn btn-warning rounded"
            onClick={onLogoutClick}
          >
            Log out
          </button>
        ) : (
          <button
            className="btn btn-warning rounded"
            onClick={onLoginClick} 
          >
            Log in
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
