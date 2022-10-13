import "./header.css";
import { Link, link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        {" "}
        Promobit
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus Filmes
      </Link>
    </header>
  );
}
export default Header;
