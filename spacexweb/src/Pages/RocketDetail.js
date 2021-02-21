import { useState, useEffect } from 'react';

const RocketDetail = (props) => {
    const [rockets, setRockets] = useState([])
    const rocket_id = props.location.state.id

    useEffect(
        () => {
            const fetchRockets = async () => {
                const response = await fetch(`https://api.spacexdata.com/v3/rockets/${rocket_id}`)
                const data = await response.json()
                setRockets(data)
            }
            fetchRockets()
        }
    ,[])

    if (rockets.first_flight == null){
        return (
            <div></div>
        )}
    return (
    // <div>{rockets['first_flight']}</div>
    <div style={{marginTop:"4em"}}>
            <div >
            <h2>{rockets["rocket_name"]}</h2>
            <ul>
                <li>Launch year: {rockets['launch_year']} </li>
                <li>First flight: {rockets.first_flight} </li>
                <li>Height: {rockets.height.meters} meters</li>
                <li>Diameter: {rockets.diameter.meters} meters</li>
                <li>Mass: {rockets.mass.kg} kg</li>
                <li>Country: {rockets.country}</li>
                <li>Status: {rockets.active == true ? 'active' : 'inactive'}</li>
            </ul>
            <h4>payload</h4>
            <ul>
            {rockets.payload_weights.map((i) => (
            <li>{i.name} {i.kg} kg</li>
          ))}
            </ul>
            <p>
            {rockets['description']}
            </p>
            <h3>Image</h3>
            {rockets.flickr_images.map((i) => (
            <img
              src={i}
              style={{
                width: "400px",
                height: "200px"
              }}
            ></img>
          ))}
        </div>
    </div>

    )
}

export default RocketDetail;