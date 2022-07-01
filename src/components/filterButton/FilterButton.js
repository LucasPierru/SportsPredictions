import React, {useState, useEffect} from 'react';
import './FilterButton.css'

function FilterButton({league, setLeagueFilter, leagueFilter}) {
    const [active, setActive] = useState(false);
    const buttonClass = active ? 'filter active' : 'filter'
    useEffect(() => {
        if (active) setLeagueFilter([...leagueFilter, league])
        else {
            let filteredArray = leagueFilter.filter(e => e !== league)
            setLeagueFilter(filteredArray)
        }   
    }, [active])

    const handleClick = () => {
        setActive(!active)  
    }

    return (
        <button className={buttonClass} onClick={handleClick}>
            {league}
        </button>
    )
}

export default FilterButton;