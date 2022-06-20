import React from 'react';
import './TeamData.css';

function TeamData({team}) {
    return (
        <div className='stats'>
            <img 
                src={team.logo}
                alt={ team.name + ' Logo'}
            />
            <h1>{ team.name }</h1>
            <p>{ team.record }</p>
            <h2>{ team.winProbability }</h2>
        </div>
    )
}

export default TeamData;