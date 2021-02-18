import { useState, useEffect } from 'react';
import Cards from '../Components/Card';



const Launches = () => {
    // console.log();
    const [launches, setlaunches] = useState([])
    useEffect(
        () => {
            const fetchLanuchs = async () => {
                const response = await fetch("https://api.spacexdata.com/v3/launches")
                const data = await response.json()
                setlaunches(data)
            }
            fetchLanuchs()
        }
    )
    return (
        // <div>{JSON.stringify(launches,null,2)}</div>
        <div style={{ display: 'flex',flexFlow: 'row wrap'}}>
        {launches.map((launch) => (
            <Cards var={launch} page={'Launch'}/>
        ))}
    </div>
    )
}

export default Launches;