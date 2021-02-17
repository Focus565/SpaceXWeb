import { useState, useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';

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
    <div>{rockets.map((rocket) => (<Card>
        <CardMedia style = {{ height: 0, paddingTop: '50%'}}
          image={(rocket.flickr_images)}
        />
        <CardContent ><h2>{rocket.rocket_name}</h2>{rocket.description}</CardContent>
        <Button variant="contained" color="primary" href="#contained-buttons">
        more
      </Button></Card>))}</div>
    )
}

export default Rockets;