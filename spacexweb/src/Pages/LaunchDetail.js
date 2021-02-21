import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
const LaunchDetail = (props) => {
    const [launches, setLaunches] = useState([])
    const rocket_id = props.location.state.id

    useEffect(
        () => {
            const fetchLaunchs = async () => {
                const response = await fetch(`https://api.spacexdata.com/v3/launches/${rocket_id}`)
                const data = await response.json()
                setLaunches(data)
            }
            fetchLaunchs()
        }
    ,[])

    if (launches.flight_number == null){
        return (
            <div></div>
        )}
    return (
    // <div>{rockets['first_flight']}</div>
    <div style={{marginTop:"4em"}}>
            <h2>{launches.mission_name}</h2>
                        <ul>
                            <li>Launch year: {launches.launch_year} </li>
                            <li>Rocket name: {launches.rocket.rocket_name} </li>
                            <li>Launch Success: {launches.launch_success == true ? 'success' : 'failed'} </li>
                        </ul>
                        <p>
                        {launches.details}
                        </p>
                        <Link to={{pathname:"/RocketDetail",state:{id:launches.rocket.rocket_id}}}> 
                        <Button variant="contained" color="primary">About Rocket </Button>
                        </Link>
    </div>

    )
}

export default LaunchDetail;