import React from 'react'
import './GameData.css'

function GameData ({gameData}) {
    return (
        <div className='gameDataContainer'>
            <div className='gameData'>
                <h1>@</h1>
                <h1>{gameData.scoreA} - {gameData.scoreB}</h1>
            </div>    
            <p>{gameData.gameTime}</p>
        </div>
        
    )
}

export default GameData;