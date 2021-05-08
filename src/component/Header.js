import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

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
      <p>Greatest App</p>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </header>
  );
};

export default Header;
