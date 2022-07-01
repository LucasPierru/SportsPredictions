import React from 'react';
import TeamData from './TeamData';
import GameData from './GameData';
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
            <GameData gameData={gameData}/>
            <TeamData team={game[1]}/>
        </div>         
    )
}

export default Results;