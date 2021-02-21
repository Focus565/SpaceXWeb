import { useState, useEffect, useCallback, useMemo } from "react";
import Cards from "../Components/Card";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";

let i = 1;
const Launches = () => {
  const [boolLaunch, setBoolLaunch] = useState("");
  const [rocketName, setRocketName] = useState("");
  const [launchYear, setLaunchYear] = useState("");
  const [launches, setLaunches] = useState([]);
  const handleChangeRocketName = useCallback((event) => {
    setRocketName(event.target.value);
  });
  const handleChangeLaunchYear = useCallback((event) => {
    setLaunchYear(event.target.value);
  });
  const handleBoolChange = useCallback((event) => {
    setBoolLaunch(event.target.value);
    console.log(event.target.value);
  });
  useEffect(() => {
    const fetchLaunchs = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunchs();
  }, []);

  const filteredSearch = useMemo(() => {
    if (
      rocketName.length > 0 ||
      launchYear.length > 0 ||
      boolLaunch != "none"
    ) {
      if (boolLaunch != "none") {
        return launches.filter((eachLaunch) => {
          return (
            eachLaunch.rocket.rocket_name.includes(String(rocketName)) &&
            eachLaunch.launch_year.includes(String(launchYear)) &&
            eachLaunch.launch_success == boolLaunch
          );
        });
      } else {
        return launches.filter((eachLaunch) => {
          return (
            eachLaunch.rocket.rocket_name.includes(String(rocketName)) &&
            eachLaunch.launch_year.includes(String(launchYear))
          );
        });
      }
    }
  }, [rocketName, launchYear, boolLaunch]);
  return (
    <div
      style={{
        marginTop: "4em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "white",
        }}
      >
        {/* <IndexProvider> */}
        <Typography variant="h6" style={{ margin: "1em" }}>
          Rocket Name :
        </Typography>
        <TextField
          label="Rocket Name"
          variant="outlined"
          value={rocketName}
          onChange={handleChangeRocketName}
          style={{ margin: "1em", flexGrow: "1" }}
        ></TextField>
        <Typography variant="h6">Launch Year :</Typography>
        <TextField
          label="Launch Year"
          variant="outlined"
          value={launchYear}
          onChange={handleChangeLaunchYear}
          style={{ margin: "1em", flexGrow: "1" }}
        ></TextField>
        <Typography variant="h6">Launch Success :</Typography>
        <Select
          value={boolLaunch}
          onChange={handleBoolChange}
          style={{ flexGrow: "0.5", margin: "1em" }}
          variant="outlined"
        >
          <MenuItem value={"none"}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={true}>Success</MenuItem>
          <MenuItem value={false}>Fail</MenuItem>
        </Select>
        {/* </IndexProvider> */}
      </div>
      {/* If good change launches to loading */}
      {launches.length === 0 ? (
        <CircularProgress
          style={{ position: "absolute", top: "50%", left: "50%" }}
        ></CircularProgress>
      ) : null}
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        {filteredSearch != null
          ? filteredSearch.map((launch) => (
              <Cards key={i++} var={launch} page={"Launch"} />
            ))
          : launches.map((launch) => (
              <Cards key={i++} var={launch} page={"Launch"} />
            ))}
      </div>
    </div>
  );
};

export default Launches;
