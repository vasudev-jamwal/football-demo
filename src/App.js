import { Provider, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";

const reducer = (state, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "GOAL_A":
      newState = {
        ...newState,
        TEAM_A_SCORE: (parseInt(state.TEAM_A_SCORE) || 0) + 1,
      };
      break;
    case "GOAL_B":
      newState = {
        ...newState,
        TEAM_B_SCORE: (parseInt(state.TEAM_B_SCORE) || 0) + 1,
      };
      break;
  }
  return newState;
};

const logger = (store) => (next) => (action) => {
  console.group("Action dispatched");
  console.log("action", action);
  console.log("OLD", store.getState());
  next(action);
  console.log("NEW", store.getState());
  console.groupEnd();
};

function App() {
  return (
    <Provider store={createStore(reducer, applyMiddleware(logger))}>
      <div className="App">
        <ScoreBoard />
      </div>
    </Provider>
  );
}

const ScoreBoard = () => {
  const scoreA = useSelector((state) => state.TEAM_A_SCORE || 0);
  const scoreB = useSelector((state) => state.TEAM_B_SCORE || 0);
  const dispatch = useDispatch();
  return (
    <>
      <ScoreDisplay score={scoreA} />
      <ScoreDisplay score={scoreB} />
      <ScoreBuzzer onClick={() => dispatch({ type: "GOAL_A" })} />
      <ScoreBuzzer onClick={() => dispatch({ type: "GOAL_B" })} />
    </>
  );
};

const ScoreDisplay = ({ score }) => <div>{score}</div>;
const ScoreBuzzer = ({ onClick }) => <button onClick={onClick}>{"+"}</button>;

export default App;
