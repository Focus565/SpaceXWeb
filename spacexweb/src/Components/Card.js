import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
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
            {props.var.description}<div></div>
            <Link to={{pathname:"/RocketDetail",state:{id:props.var.rocket_id}}}> 
            <Button variant="contained" color="primary">more </Button>
            </Link>
          </CardContent>
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
          <Link to={{pathname:"/LaunchDetail",state:{id:props.var.flight_number}}}> 
            <Button variant="contained" color="primary">more </Button>
            </Link>
        </Card>
      );
    }
  }
};
export default Cards;
