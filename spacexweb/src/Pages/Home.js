import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const HomePage = (
  <>
    <Container maxWidth="xl">
      <div
        className="headerName"
        style={{
          height: "calc(100vh - 4em)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "url('images/bg01.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: "4em",
          filter: "blur(2.5px)",
        }}
      ></div>
      <Typography
        variant="h1"
        align="center"
        style={{
          color: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        SpaceX
      </Typography>
    </Container>
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container direction="column">
        {/* <div className="informationSpaceX" style={{ height: "100vh", display: "flex", justifyContent: "left", alignItems: "center" }}> */}
        <Grid item lg={6} sm={12}>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            What is SpaceX?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <strong>Space Exploration Technologies Corp. (SpaceX) </strong>is an
            American aerospace manufacturer and space transportation services
            company headquartered in Hawthorne, California. It was founded in
            2002 by Elon Musk with the goal of reducing space transportation
            costs to enable the colonization of Mars. SpaceX has developed
            several launch vehicles and rocket engines, as well as the Dragon
            cargo spacecraft and the Starlink satellite constellation (providing
            internet access), and has flown humans and cargo to the
            International Space Station on the SpaceX Dragon 2.
          </Typography>
        </Grid>
        {/* </div> */}
      </Grid>
    </Container>
  </>
);

const Home = () => {
  return HomePage;
};

export default Home;
