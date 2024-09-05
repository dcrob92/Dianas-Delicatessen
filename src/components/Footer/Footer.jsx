import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const Footer = () => {
  return (
    <footer
      className="py-5"
      style={{
        backgroundColor: "rgba(85 32 89 / 39%)",
        paddingTop: "0rem !important",
        paddingBottom: "0rem !important",
      }}
    >
      <div className="container">
        <div className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {ROUTES.map((route, index) => (
              <li key={index} className="nav-item">
                <Link to={route.path} className="nav-link px-2 text-muted">{route.label}</Link>
              </li>
            ))}
          </ul>
          <p className="text-center text-muted">© 2021 Company, Inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
