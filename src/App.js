import { Provider } from "react-redux";
import store from "./store/index";
import ScoreBoard from "./component/ScoreBoard";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import LoginDashboard from "./component/LoginDashboard";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/app">
            <ScoreBoard />
          </Route>
          <Route path="/login">
            <LoginDashboard />
          </Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
