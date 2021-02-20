import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import AnimatedModal from "../Components/Modal";
import Chip from "@material-ui/core/Chip";

const Cards = (props) => {
  if (props.var == null) {
    return <div></div>;
  } else {
    if (props.page === "Rocket") {
      return (
        <Card>
          <CardMedia
            style={{ height: 200, width: 200 }}
            image={props.var.flickr_images}
          />
          <CardContent>
            <h2>{props.var.rocket_name}</h2>
            {props.var.description}
          </CardContent>
          <AnimatedModal var={props.var} page={"Rocket"} />
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
            style={{ height: 200, width: 200 }}
            image={props.var.links.mission_patch}
          />
          <CardContent>
            <h2>{props.var.mission_name}</h2>
            <Chip label={props.var.launch_year} />
            <Chip label={props.var.rocket.rocket_name} />
            <Chip
              label={props.var.launch_success == true ? "success" : "failed"}
            />
          </CardContent>
          {/* <Button style={{marginBottom:"0.5em"}} variant="contained" color="primary" href="#contained-buttons">
            more
            </Button> */}
          <AnimatedModal var={props.var} page={"Launch"} />
        </Card>
      );
    }
  }
};
export default Cards;
