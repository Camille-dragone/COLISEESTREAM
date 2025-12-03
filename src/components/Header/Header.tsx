import { NavLink } from "react-router-dom";
import "./Header.css"; 

function Header() {
  return (
    <header className="site-header-hdr">
      <div className="container-hdr">
        <NavLink
          to="/"
          className="brand-hdr"
          aria-label="Aller à l’accueil"
        >
       {/*   <img src={logo} alt="Accueil" className="brand-logo" />*/}
        </NavLink>

        <nav className="nav-hdr" aria-label="Évènements">
          <NavLink
            to="/évènement"
            end
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Évènements
          </NavLink>
          <NavLink
            to="/stream"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Streaming
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Store
          </NavLink>
          <NavLink
            to="/Infos"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Informations utiles
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
