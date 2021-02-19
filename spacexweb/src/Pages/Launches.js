import { useState, useEffect,useCallback,useMemo } from 'react';
import Cards from '../Components/Card';
import TextField from '@material-ui/core/TextField';
import SearchOption from '../Components/SearchOption'
import CircularProgress from '@material-ui/core/CircularProgress';
import IndexContext, { IndexProvider } from '../Context/IndexContext'


let i = 1;
const Launches = () => {
    
    const [text, setText] = useState('')
    const handleSearch = useCallback(
        (event) => {
            setText(event.target.value)

        },
        [setText],
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
    const filteredSearch = useMemo(() => {
        return launches.filter((eachLaunch) => {
            console.log(eachLaunch.launch_year.includes(text))
            return eachLaunch.launch_year.includes(String(text))
        })
    },[ text])
    // console.log(launches)
    // console.log(filteredSearch)
    // console.log(text.length)
    return (
        <div style={{ marginTop: "4em", display: 'flex', flexDirection: "column", justifyContent: "space-evenly" }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <IndexProvider>
                <SearchOption></SearchOption>
                <TextField label="Search Field" variant="outlined" value={text} onChange={handleSearch} style={{ margin: "1em", flexGrow:'1' }}></TextField>
                </IndexProvider>
            </div>
            {/* If good change launches to loading */}
            {launches.length === 0 ? <CircularProgress style={{ margin:'auto' }}></CircularProgress> : null}
            <div style={{ display: 'flex', flexFlow: 'row wrap' ,justifyContent:'center'}}>
            {text.length > 0 ? filteredSearch.map((launch) => (<Cards key={i++} var={launch} page={'Launch'}/>)) : launches.map((launch) => (<Cards key={i++} var={launch} page={'Launch'}/>)) }

        </div>
    </div>
    )
}

export default Launches;