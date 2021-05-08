import { Provider } from "react-redux";
import store from "./store/index";
import ScoreBoard from "./component/ScoreBoard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ScoreBoard />
      </div>
    </Provider>
  );
}

export default App;
