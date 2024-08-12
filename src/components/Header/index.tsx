// Header.jsx
import "./index.scss"; // Certifique-se de que o caminho esteja correto
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/vitoria-simbulo.svg";

function Header() {
  // Use require para importar a imagem

  return (
    <header className="header">
      <div className="element">
        {/* Usando o SVG como imagem com require */}
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          height={"100%"}
          //   width={"20px"}
        />
      </div>
      <div className="element">
        <Link to={"/"} className="link">
          Inicio
        </Link>
      </div>
      <div className="element">
        <Link to={"/about"} className="link">
          Quem Somos
        </Link>
      </div>
      <div className="element">
        <Link to={"/history"} className="link">
          Nossa História
        </Link>
      </div>
      <div className="element">
        <Link to={"/workouts"} className="link">
          Treinos
        </Link>
      </div>
    </header>
  );
}

export default Header;
