import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 0, 3),
        marginTop:"8em",
        textAlign:"center",
        display:"flex",
        "flex-direction":"column",
        margin: "auto",
        width: "50%",
        "min-width": "0",
        "border-radius": ".25rem"
    },
}));
const LaunchDetail = (props) => {
    const [launches, setLaunches] = useState([])
    const rocket_id = props.location.state.id
    const classes = useStyles();
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
    <div className={classes.paper}>
        <div>
            <h2 style={{textAlign: "center",}}>Mission: {launches.mission_name}</h2 ></div>
            <p>
                        {launches.details}
                        </p>
                        <div style={{display:"flex" ,}}>
                            <div style={{margin: "auto"}}>Launch year: {launches.launch_year} </div>
                            <div style={{margin: "auto"}}>Rocket name: {launches.rocket.rocket_name} </div>
                            <div style={{margin: "auto"}}>Launch Success: {launches.launch_success == true ? 'success' : 'failed'} </div>
                        </div><br></br>
                        <Link to={{pathname:"/RocketDetail",state:{id:launches.rocket.rocket_id}}}> 
                        <Button variant="contained" color="primary">About Rocket </Button>
                        </Link>
    </div>

    )
}

export default LaunchDetail;