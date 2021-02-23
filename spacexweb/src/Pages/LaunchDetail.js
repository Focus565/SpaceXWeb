import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 0, 3),
    marginTop: "8em",
    textAlign: "center",
    display: "flex",
    "flex-direction": "column",
    margin: "auto",
    width: "50%",
    "min-width": "0",
    "border-radius": ".25rem",
  },
}));
const LaunchDetail = (props) => {
  const [launches, setLaunches] = useState([]);
  const { id } = useParams();
  const classes = useStyles();
  useEffect(() => {
    const fetchLaunchs = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${id}`
      );
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunchs();
  }, []);

  if (launches.flight_number == null) {
    return <div></div>;
  }
  console.log(launches);
  return (
    // <div>{rockets['first_flight']}</div>
    <div className={classes.paper}>
      <div>
        <h2 style={{ textAlign: "center" }}>
          Mission: {launches.mission_name}
        </h2>
        <img src={launches.links.mission_patch} style={{ width: "25vw" }} />
      </div>
      <p>{launches.details}</p>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto" }}>
          <strong>Launch year:</strong> {launches.launch_year}{" "}
        </div>
        <div style={{ margin: "auto" }}>
          <strong>Rocket name:</strong> {launches.rocket.rocket_name}{" "}
        </div>
        <div style={{ margin: "auto" }}>
          <strong>Launch Success: </strong>{" "}
          {launches.launch_success == true ? "success" : "failed"}{" "}
        </div>
      </div>
      <br></br>
      <Link
        to={{
          pathname: "/Rockets/" + launches.rocket.rocket_id,
          state: { id: launches.rocket.rocket_id },
        }}
        style={{ width: "fit-content", margin: "auto" }}
      >
        <Button variant="contained" color="primary">
          About Rocket{" "}
        </Button>
      </Link>
    </div>
  );
};

export default LaunchDetail;
