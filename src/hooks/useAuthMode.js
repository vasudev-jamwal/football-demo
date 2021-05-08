import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default () => {
  const history = useHistory();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, []);
};
