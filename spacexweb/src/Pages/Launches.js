import { useState, useEffect } from 'react';
// import  DataGrid  from '@material-ui/data-grid';



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
        <div>{JSON.stringify(launches,null,2)}</div>
        // <div>{launches.map((launch) =>(<li>{launch.mission_name}</li>))}</div>
    )
}

export default Launches;