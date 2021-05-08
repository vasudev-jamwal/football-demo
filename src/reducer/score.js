const scoreReducer = (state, action) => {
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

export default scoreReducer;
