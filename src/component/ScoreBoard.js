import { useDispatch, useSelector } from "react-redux";
import useAuthMode from "../hooks/useAuthMode";

const ScoreBoard = () => {
  useAuthMode();
  const scoreA = useSelector((state) => state.score.TEAM_A_SCORE || 0);
  const scoreB = useSelector((state) => state.score.TEAM_B_SCORE || 0);
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

export default ScoreBoard;
