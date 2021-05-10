import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./header.css";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/login");
  };
  return (
    <header>
      <nav>
        {["Home", "Prices", "Score Board", "About"].map((title) => (
          <NavItem title={title} />
        ))}
      </nav>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </header>
  );
};

export default Header;

const NavItem = ({ title }) => {
  return (
    <div className="navitem">
      <a href="#">{title}</a>
      <div className="submenu">
        <ul className="list">
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    </div>
  );
};
