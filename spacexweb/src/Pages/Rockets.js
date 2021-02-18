import { useState, useEffect } from 'react';
import Cards from '../Components/Card';

const Rockets = () => {
    const [rockets, setRockets] = useState([])
    useEffect(
        () => {
            const fetchRockets = async () => {
                const response = await fetch("https://api.spacexdata.com/v3/rockets")
                const data = await response.json()
                setRockets(data)
            }
            fetchRockets()
        }
    )
    return (
        // <div>{JSON.stringify(rockets,null,2)}</div>
    <div>
        {rockets.map((rocket) => (
            <Cards var={rocket} page={'Rocket'}/>
        ))}
    </div>
    )
}

export default Rockets;