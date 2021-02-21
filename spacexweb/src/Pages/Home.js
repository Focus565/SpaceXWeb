import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link, animateScroll as scroll } from "react-scroll";
import bg from "../images/bg04.png";
import logo from "../images/logowhite.png";
import leftPic from "../images/Intersect_1.png";
import rightPic from "../images/Intersect_2.png";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link as LinkRouter } from "react-router-dom";

const customDesign = {
  width: "25vw",
  height: "75vh",
  borderRadius: "4px",
  border: "white solid 3px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const buttonLink = {
  background: "var(--color1)",
  color: "var(--color2)",
  width: "100%",
};
const HomePage = (
  <>
    <div
      className="headerName"
      style={{
        height: "calc(100vh - 4em)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        backgroundPosition: "center",
        backgroundSize: "cover",
        marginTop: "4em",
        filter: "blur(2.5px)",
      }}
    ></div>
    <img
      src={logo}
      style={{
        position: "absolute",
        top: "60%",
        right: "0",
        width: "50vw",
        transform: "translateY(-40%)",
      }}
      alt="logowhite"
    />
    <Typography
      variant="h6"
      align="center"
      style={{
        color: "white",
        position: "absolute",
        top: "70%",
        right: "0",
        width: "50vw",
        textAlign: "left",
        // transform: "translate(-50%, -50%)",
      }}
    >
      <strong>
        SpaceX designs, manufactures and launches advanced rockets and
        spacecraft. The company was founded in 2002 to revolutionize space
        technology, with the ultimate goal of enabling people to live on other
        planets.
      </strong>
    </Typography>
    <Link
      className="ca3-scroll-down-link ca3-scroll-down-arrow"
      // activeClass="ca3-scroll-down-link ca3-scroll-down-arrow"
      to="detail"
      spy={true}
      smooth={true}
      // offset={-70}
      duration={500}
    ></Link>
    {/* </Container> */}
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // marginTop: "4em",
        width: "100%",
      }}
      maxWidth="xl"
      name="detail"
    >
      <Box
        style={{
          background: "#df2935",
          padding: "1em",
          borderRadius: "4px",
          boxShadow: "5px 8px",
          margin: "10em",
        }}
      >
        <Grid container direction="column">
          {/* <div className="informationSpaceX" style={{ height: "100vh", display: "flex", justifyContent: "left", alignItems: "center" }}> */}
          <Grid item lg={6} sm={12}>
            <Typography
              variant="h2"
              style={{ textAlign: "center", color: "var(--color2)" }}
            >
              <b>What is SpaceX?</b>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ color: "var(--color2)" }}>
              <strong>Space Exploration Technologies Corp. (SpaceX) </strong>
              is an American aerospace manufacturer and space transportation
              services company headquartered in Hawthorne, California. It was
              founded in 2002 by Elon Musk with the goal of reducing space
              transportation costs to enable the colonization of Mars. SpaceX
              has developed several launch vehicles and rocket engines, as well
              as the Dragon cargo spacecraft and the Starlink satellite
              constellation (providing internet access), and has flown humans
              and cargo to the International Space Station on the SpaceX Dragon
              2.
            </Typography>
          </Grid>
          {/* </div> */}
        </Grid>
      </Box>
    </Container>
    <Container
      style={{
        height: "calc(100vh - 4em)",
        background: "var(--color3)",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      maxWidth="xl"
    >
      <Box style={customDesign}>
        <img src={leftPic} style={{ margin: "2em" }} />
        <div
          style={{
            color: "var(--color3)",
            background: "var(--color2)",
            width: "fit-content",
            paddingLeft: "1em",
            paddingRight: "1em",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "4px",
            fontSize: "2vw",
          }}
        >
          Rocket
        </div>
        <div
          style={{
            color: "var(--color2)",
            textAlign: "center",
            fontSize: "1.25vw",
          }}
        >
          See all Rockets detail until present.
        </div>
        <LinkRouter to="/Rockets">
          <Button style={buttonLink}>More</Button>
        </LinkRouter>
      </Box>
      <Box style={customDesign}>
        <img src={rightPic} style={{ margin: "2em" }} />
        <div
          style={{
            color: "var(--color3)",
            background: "var(--color2)",
            width: "fit-content",
            paddingLeft: "1em",
            paddingRight: "1em",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "4px",
            fontSize: "2vw",
          }}
        >
          Launches
        </div>
        <div
          style={{
            color: "var(--color2)",
            textAlign: "center",
            fontSize: "1.25vw",
          }}
        >
          See all launches detail until present.
        </div>
        <LinkRouter to="/Launches">
          <Button style={buttonLink}>More</Button>
        </LinkRouter>
      </Box>
    </Container>
  </>
);

const Home = () => {
  return HomePage;
};

export default Home;
