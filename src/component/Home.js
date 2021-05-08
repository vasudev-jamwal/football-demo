import { useHistory } from "react-router";
import useAuthMode from "../hooks/useAuthMode";

const Home = () => {
  useAuthMode();
  const history = useHistory();
  const goToApp = () => {
    history.push("/app");
  };
  return (
    <section>
      <p>Go to app</p>
      <button onClick={goToApp}>APP</button>
    </section>
  );
};

export default Home;
