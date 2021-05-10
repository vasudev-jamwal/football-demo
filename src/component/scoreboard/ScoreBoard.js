import { useDispatch, useSelector } from "react-redux";
import useAuthMode from "../../hooks/useAuthMode";
import TeamDisplay from "./TeamDisplay";
import './scoreboard.scss'

const ScoreBoard = () => {
  useAuthMode();
  const scoreA = useSelector((state) => state.score.TEAM_A_SCORE || 0);
  const scoreB = useSelector((state) => state.score.TEAM_B_SCORE || 0);
  const dispatch = useDispatch();
  return (
    <section className='scoreboard'>
      <TeamDisplay teamName={'Barcelona'} score={scoreA} incrementScore={() => dispatch({ type: "GOAL_A" })} />
      <TeamDisplay teamName={'Real Madrid'} score={scoreB} incrementScore={() => dispatch({ type: "GOAL_B" })} />
    </section>
  );
};

export default ScoreBoard;
