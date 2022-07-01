import React from 'react';
import './TeamData.css';

function TeamData({team}) {
    if (team.home) {
        return (
            <div className='homeTeamData'>
                <img 
                    src={team.logo}
                    alt={ team.name + ' Logo'}
                /> 
                <div className='stats'>
                    <h1>{ team.name }</h1> 
                    <p>{ team.record }</p>
                    <h2>{ team.winProbability }</h2>
                </div>
            </div> 
        )    
    } else {
        return (
            <div className='awayTeamData'>  
                <div className='stats'>  
                    <h1>{ team.name }</h1> 
                    <p>{ team.record }</p>
                    <h2>{ team.winProbability }</h2>
                </div> 
                <img 
                    src={team.logo}
                    alt={ team.name + ' Logo'}
                />  
            </div>
        )    
    }
    
}

export default TeamData;