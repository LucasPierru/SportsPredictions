import React from 'react';
import Results from '../components/results/Results';
import './Sports.css'

const leagues = {
    basketball: ['NBA', 'PRO A', 'Euroligue'],
    football: ['Premier League', 'Ligue 1', 'Serie A', 'Liga', 'Champions League']
}

const data = [
    {
        sport: 'basketball',
        game: [
                {
                    name: 'TeamA',
                    logo: require("../images/NYK_logo.png"),
                    record: '1-2',
                    winProbability: '32%'
                },
                {
                    name: 'TeamB',
                    logo: require("../images/PHI_logo.png"),
                    record: '3-0',
                    winProbability: '68%'
                }
            ]   
    },
    {
        sport: 'basketball',
        game: [
                {
                    name: 'FootA',
                    logo: require("../images/NYK_logo.png"),
                    record: '1-2',
                    winProbability: '32%'
                },
                {
                    name: 'TeamB',
                    logo: require("../images/PHI_logo.png"),
                    record: '3-0',
                    winProbability: '68%'
                }
            ]   
    },
    {
        sport: 'basketball',
        game: [
                {
                    name: 'Knicks',
                    logo: require("../images/NYK_logo.png"),
                    record: '1-2',
                    winProbability: '32%'
                },
                {
                    name: '76ers',
                    logo: require("../images/PHI_logo.png"),
                    record: '3-0',
                    winProbability: '68%'
                }
            ]   
    },
]
function Sports({sport}) {
    const sportArray = [sport];
    const filteredData = data.filter(item => {
        return sportArray.includes(item.sport)
    })
    console.log('test');
    return(
        <div className='container'>
            <div className='filterBar'>
                {leagues[sport].map(league => {
                    return (
                        <button key={league} className='filter'>
                            {league}   
                        </button>
                    )
                })}    
            </div>  
            {
                filteredData.map((item, index) => {
                    return(
                        <Results key={index} game={item.game}/>    
                    );
                })
            }   
        </div>   
    );
}

export default Sports;