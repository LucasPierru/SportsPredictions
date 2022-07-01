import React, {useState, useEffect} from 'react';
import './LeagueStats.css'

function LeagueStats({league, leagueFilter}) {
    const [leagueIndex, setLeagueIndex] = useState(0);

    useEffect(() => {
        setLeagueIndex(0);
    }, [leagueFilter])

    const leftClick = () => {
        if(leagueIndex === 0) setLeagueIndex(league.length-1)
        else setLeagueIndex(leagueIndex-1)
    }

    const rightClick = () => {
        if(leagueIndex === league.length-1) setLeagueIndex(0)
        else setLeagueIndex(leagueIndex+1)
    }

    return(
        <div className='leagueStats'>
            <h1>League statistics</h1>
            <div className='leagueSelection'>
                <button onClick={leftClick}>left</button>
                <p>{league[leagueIndex]}</p>
                <button onClick={rightClick}>right</button>    
            </div>
            
        </div>
    );
}

export default LeagueStats