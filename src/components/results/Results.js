import React from 'react';
import TeamData from './TeamData';
import './Results.css';

const gameData = {
    scoreA: 23,
    scoreB: 29,
    gameTime: `23'`
}
function Results({game}) {
    return (
        <div className='results'>
            <TeamData team={game[0]}/>
            <div className='gameData'>
                <h1>@</h1>
                <h1>{gameData.scoreA} - {gameData.scoreB}</h1>
                <h3>{gameData.gameTime}</h3>
            </div>
            <TeamData team={game[1]}/>
        </div>         
    )
}

export default Results;