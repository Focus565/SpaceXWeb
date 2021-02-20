import { useState, useEffect,useCallback,useMemo } from 'react';
import Cards from '../Components/Card';
import TextField from '@material-ui/core/TextField';
import SearchOption from '../Components/SearchOption'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useIndex } from '../Context/IndexContext'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';


let i = 1;
const Launches = () => {
    const { indexValue } = useIndex();
    const [boolLaunch, setBoolLaunch] = useState(true);
    const [text, setText] = useState('')
    const handleChange = (event) => {
        setBoolLaunch(event.target.value)
    }
    // const renderCard = () => {
    //     if (text.length > 0) {
    //         console.log(filteredSearch)
    //         return filteredSearch.map((launch) => (<Cards key={i++} var={launch} page={'Launch'}/>))
    //     } else {
    //         console.log(filteredSearch)
    //         return launches.map((launch) => (<Cards key={i++} var={launch} page={'Launch'}/>))
    //     }
        
    // }
    const handleSearch = useCallback(
        (event) => {
            setText(event.target.value)
        },
        [setText, indexValue],
    )
    const [launches, setLaunches] = useState([])
    useEffect(
        () => {
            const fetchLaunchs = async () => {
                const response = await fetch("https://api.spacexdata.com/v3/launches")
                const data = await response.json()
                setLaunches(data)
            }
            fetchLaunchs()
        }
        , [])
    // useEffect(() => {
    //     console.log(indexValue)
    // }, [indexValue])
    const filteredSearch = useMemo(() => {
        if (indexValue === 0){
            return launches.filter((eachLaunch) => {
                // console.log(eachLaunch.rocket.rocket_name.includes(text))
                return eachLaunch.rocket.rocket_name.includes(String(text)) && eachLaunch.launch_success == boolLaunch
            })
        } else if (indexValue === 1) {
            return launches.filter((eachLaunch) => {
                // console.log(eachLaunch.launch_year.includes(text))
                return eachLaunch.launch_year.includes(String(text)) && eachLaunch.launch_success == boolLaunch
            })
        } 
    },[text, indexValue])
    console.log(launches)
    // console.log(filteredSearch)
    // console.log(text.length)
    return (
        <div style={{ marginTop: "4em", display: 'flex', flexDirection: "column", justifyContent: "space-evenly" }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {/* <IndexProvider> */}
                <SearchOption></SearchOption>
                <TextField label="Search Field" variant="outlined" value={text} onChange={handleSearch} style={{ margin: "1em",  flexGrow: '1'}}></TextField>
                <Typography variant='h6'>
                    Launch Success :
                </Typography>
                <Select
                    value={boolLaunch}
                    onChange={handleChange}
                    style={{flexGrow: '0.5', margin:'1em'}}
                    variant='outlined'
                 >
                <MenuItem value={true}>Success</MenuItem>
                <MenuItem value={false}>Not Success</MenuItem>
                </Select>
                {/* </IndexProvider> */}
            </div>
            {/* If good change launches to loading */}
            {launches.length === 0 ? <CircularProgress style={{ margin:'auto' }}></CircularProgress> : null}
            <div style={{ display: 'flex', flexFlow: 'row wrap' ,justifyContent:'center'}}>
            {text.length > 0 ? filteredSearch.map((launch) => (<Cards key={i++} var={launch} page={'Launch'}/>)) : launches.map((launch) => (<Cards key={i++} var={launch} page={'Launch'}/>)) }
            {/* {renderCard()} */}
        </div>
    </div>
    )
}

export default Launches;