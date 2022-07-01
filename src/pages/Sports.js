import React, {useState} from 'react';
import Results from '../components/results/Results';
import LeagueStats from '../components/stats/LeagueStats';
import FilterButton from '../components/filterButton/FilterButton';
import './Sports.css'

const leagues = {
    basketball: ['NBA', 'PRO A', 'Euroligue'],
    football: ['Premier League', 'Ligue 1', 'Serie A', 'Liga', 'Champions League']
}

const data = [
    {
        sport: 'basketball',
        league: 'NBA',
        game: [
                {
                    name: 'TeamA',
                    logo: require("../images/NYK_logo.png"),
                    record: '1-2',
                    winProbability: '32%',
                    home: false
                },
                {
                    name: 'TeamB',
                    logo: require("../images/PHI_logo.png"),
                    record: '3-0',
                    winProbability: '68%',
                    home: true
                }
            ]   
    },
    {
        sport: 'basketball',
        league: 'PRO A',
        game: [
                {
                    name: 'FootA',
                    logo: require("../images/NYK_logo.png"),
                    record: '1-2',
                    winProbability: '32%',
                    home: false
                },
                {
                    name: 'TeamB',
                    logo: require("../images/PHI_logo.png"),
                    record: '3-0',
                    winProbability: '68%',
                    home: true
                }
            ]   
    },
    {
        sport: 'basketball',
        league: 'NBA',
        game: [
                {
                    name: 'Knicks',
                    logo: require("../images/NYK_logo.png"),
                    record: '1-2',
                    winProbability: '32%',
                    home: false
                },
                {
                    name: '76ers',
                    logo: require("../images/PHI_logo.png"),
                    record: '3-0',
                    winProbability: '68%',
                    home: true
                }
            ]   
    },
]
function Sports({sport}) {
    const [leagueFilter, setLeagueFilter] = useState([]);
    const sportArray = [sport];
    const filteredData = data.filter(item => {
        if (leagueFilter.length === 0) return sportArray.includes(item.sport)
        else return sportArray.includes(item.sport) && leagueFilter.includes(item.league) 
    })
    const filteredLeagues = leagues[sport].filter(league => {
        if (leagueFilter.length === 0) return leagues[sport]
        else return leagueFilter.includes(league)
    })

    return(
        <div className='container'>
            <div className='filterBar'>
                    {leagues[sport].map(league => {
                        return (
                            <FilterButton 
                                key={league} 
                                league={league} 
                                setLeagueFilter={setLeagueFilter} 
                                leagueFilter={leagueFilter}
                            />
                        )
                    })}    
            </div> 
            <div className='statsAndResults'>
                <div className='resultsContainer'> 
                    {
                        filteredData.map((item, index) => {
                            return(
                                <Results key={index} game={item.game}/>    
                            );
                        })
                    }
                </div>
                <LeagueStats league={filteredLeagues} leagueFilter={leagueFilter}/>    
            </div>      
        </div>  
    );
}

export default Sports;