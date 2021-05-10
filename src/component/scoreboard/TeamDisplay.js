const TeamDisplay = ({ teamName, score, incrementScore }) => {
    return (<div className='team-display'>
        <h1 className='teamname'>{teamName}</h1>
        <h3 className='score'>{score}</h3>
        <button onClick={incrementScore}>{"+"}</button>
    </div>);
}

export default TeamDisplay;