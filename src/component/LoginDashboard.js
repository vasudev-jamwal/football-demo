import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const LoginDashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const login = () => {
    dispatch({ type: "LOGIN", payload: "I_M_HERE" });
    history.push("/");
  };
  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, []);

  return (
    <section>
      <input placeholder="Username" />
      <input placeholder="Password" />
      <button onClick={login}>Login</button>
    </section>
  );
};

export default LoginDashboard;
