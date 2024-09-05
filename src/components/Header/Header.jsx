import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import "./Header.css";
import logo from "../../assets/Header/DianaDelicatessen.png"

const Header = () => {
  

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/"><img src={logo} width="20%" alt="logoDiana" /></a></li>
          {ROUTES.map((route, index) => (
            <li key={index}><Link to={route.path} >{route.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
