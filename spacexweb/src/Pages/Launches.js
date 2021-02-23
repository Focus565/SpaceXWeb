import {useRef, useState, useEffect, useCallback, useMemo } from "react";
import Cards from "../Components/Card";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import InfiniteScroll from 'react-infinite-scroll-component'
import queryString from 'query-string'
let i = 1;
const initialState = {
  filter: {
    launchYear: '',
    rocketName: '',
    launchSuccess: 'all',
  },
  pagination: {
    perPage: 12,
    current: 1,
    hasMore: true,
  },
}
const Launches = () => {
  const [filter, setFilter] = useState(initialState.filter)
  const [pagination, setPagination] = useState(initialState.pagination)
  const [launches, setLaunches] = useState([])
  const controllerRef = useRef()
  const handleFilterChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setFilter((prev) => ({ ...prev, [name]: value }))
      setPagination(initialState.pagination)
      setLaunches([])
    },
    [],
  )
  const handlePageChange = useCallback(
    () => {
      setPagination((prev) => ({ ...prev, current: prev.current + 1 }))
    },
    [],
  )
  const filterParams = useMemo(
    () => queryString.stringify({
      id: true,
      launch_year: filter.launchYear,
      rocket_name: filter.rocketName,
      launch_success: filter.launchSuccess === 'all' ? '' : filter.launchSuccess,
      limit: pagination.perPage,
      offset: (pagination.current - 1) * pagination.perPage,
    }, { skipEmptyString: true }),
    [filter.launchSuccess, filter.launchYear, filter.rocketName, pagination],
  )
  // useEffect(
  //   () => {
  //     setFilter(initialState.filter)
  //     setPagination(initialState.pagination)
  //     setLaunches([])
  //   },
  //   [],
  // )
  useEffect(
    () => {
      const fetchLaunches = async () => {
        if (controllerRef.current) {
          controllerRef.current.abort()
        }
        const controller = new AbortController()
        controllerRef.current = controller
        try {
          const response = await fetch(`https://api.spacexdata.com/v3/launches?${filterParams}`, {
            signal: controllerRef.current?.signal,
          })
          if (response.status !== 200) {
            console.error(new Error(`API Error: status code ${response.status}`))
          } else {
            const json = await response.json()
            setLaunches((prev) => ([...prev, ...json]))
            if (json.length < pagination.perPage) {
              setPagination((prev) => ({ ...prev, hasMore: false }))
            }
          }
          controllerRef.current = null
        } catch (err) {
          console.error(err)
        }
      }
      fetchLaunches()
    },
    [filterParams, pagination.perPage],
  )
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
          name="rocketName"
          value={filter.rocketName}
          onChange={handleFilterChange}
          style={{ margin: "1em", flexGrow: "1" }}
        ></TextField>
        <Typography variant="h6">Launch Year :</Typography>
        <TextField
          label="Launch Year"
          name="launchYear"
          variant="outlined"
          value={filter.launchYear}
          onChange={handleFilterChange}
          style={{ margin: "1em", flexGrow: "1" }}
        ></TextField>
        <Typography variant="h6">Launch Success :</Typography>
        <Select
          name="launchSuccess"
          value={filter.launchSuccess}
          onChange={handleFilterChange}
          style={{ flexGrow: "0.5", margin: "1em" }}
          variant="outlined"
        >
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          <MenuItem value="true">Success</MenuItem>
          <MenuItem value="false">Fail</MenuItem>
        </Select>
        {/* </IndexProvider> */}
      </div>
      {/* If good change launches to loading */}
      {launches.length === 0 ? (
        <CircularProgress
          style={{ position: "absolute", top: "50%", left: "50%" }}
          color="secondary"
        ></CircularProgress>
      ) : null}
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        <InfiniteScroll
          dataLength={launches.length}
          next={handlePageChange}
          hasMore={pagination.hasMore}
          loader={""}
          scrollableTarget="scrollableDiv"
          style={{ overflow: 'hidden' }}
        ></InfiniteScroll>
        {launches.map((launch) => (
              <Cards key={i++} var={launch} page={"Launch"} />
            ))}
      </div>
    </div>
  );
};

export default Launches;
