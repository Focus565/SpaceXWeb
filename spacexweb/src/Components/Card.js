import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const Cards = (props) => {
  if (props.var == null) {
    return <div></div>;
  } else {
    if (props.page === "Rocket") {
      return (
        <Card
          style={{
            flex: "0 0 calc(100% / 4)",
            margin: "1em",
            textAlign: "center",
          }}
        >
          <Typography>
            <CardMedia
              style={{
                height: "50vw",
                width: "90%",
                margin: "auto",
                marginTop: "1em",
                borderRadius: "10px",
                backgroundPosition: "center",
              }}
              image={props.var.flickr_images}
            />
            <CardContent>
              <h1>{props.var.rocket_name}</h1>
              {props.var.description}
              <div></div>
              <Link
                to={{
                  pathname: "/RocketDetail",
                  state: { id: props.var.rocket_id },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "1em" }}
                >
                  more{" "}
                </Button>
              </Link>
            </CardContent>
          </Typography>
        </Card>
      );
    }
    if (props.page === "Launch") {
      return (
        <Card
          style={{
            flex: "0 0 calc(100% / 4)",
            margin: "1em",
            textAlign: "center",
          }}
        >
          <CardMedia
            style={{ height: "10vw", width: "10vw", margin: "auto" }}
            image={props.var.links.mission_patch}
          />
          <CardContent>
            <Typography>
              <h2>{props.var.mission_name}</h2>
              <span>
                Launch Year : {"   "}
                <Chip label={props.var.launch_year} />
                <br />
                Rocket Name : <Chip label={props.var.rocket.rocket_name} />
                <br />
                Launch Success :
                <Chip
                  label={
                    props.var.launch_success == true ? "success" : "failed"
                  }
                />
              </span>
            </Typography>
          </CardContent>
          <Link
            to={{
              pathname: "/LaunchDetail",
              state: { id: props.var.flight_number },
            }}
          >
            <Button variant="contained" color="primary">
              more{" "}
            </Button>
          </Link>
        </Card>
      );
    }
  }
};
export default Cards;
