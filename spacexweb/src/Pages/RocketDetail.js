import { Container, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const RocketDetail = (props) => {
  const { id } = useParams();
  const [rockets, setRockets] = useState([]);
  const [LOADSTATUS, SETLOADSTATUS] = useState(true);
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/` + id
      );
      const data = await response.json();
      SETLOADSTATUS(false);
      setRockets(data);
    };
    fetchRockets();
  }, []);

  if (rockets.first_flight == null) {
    return <div></div>;
  }

  console.log(rockets);
  return (
    <div style={{ marginTop: "5em" }}>
      <Container
        style={{
          background: "white",
          borderRadius: "4px",
          paddingTop: "1em",
          paddingBottom: "1em",
        }}
      >
        <Typography>
          <div>
            <h2>{rockets["rocket_name"]}</h2>
            
            <p>{rockets["description"]}</p>
            <ul>
              <li>First flight: {rockets.first_flight} </li>
              <li>Height: {rockets.height.meters} meters</li>
              <li>Diameter: {rockets.diameter.meters} meters</li>
              <li>Mass: {rockets.mass.kg} kg</li>
              <li>Country: {rockets.country}</li>
              <li>Status: {rockets.active == true ? "active" : "inactive"}</li>
            </ul>
            <h4>Payload</h4>
            <ul>
              {rockets.payload_weights.map((i) => (
                <li>
                  {i.name} {i.kg} kg
                </li>
              ))}
            </ul>
            <h3>Image</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                alignContent: "space-evenly",
              }}
            >
              {rockets.flickr_images.map((i) => (
                <img
                  src={i}
                  style={{
                    width: "25vw",
                    height: "20vw",
                    marginBottom: "0.25em",
                    borderRadius: "6px",
                  }}
                  alt="rocketPicture"
                ></img>
              ))}
            </div>
          </div>
        </Typography>
      </Container>
    </div>
  );
};

export default RocketDetail;
