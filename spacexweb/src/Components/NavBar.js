import { Container } from '@material-ui/core';
import {
    // BrowserRouter as Router,
    NavLink
} from 'react-router-dom'


const styleNavBar = {
    position: 'fixed',
    background: "rgba(209,209,209,0.43)",
    height: "4em",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}
const linkSelected = {
    color: "grey",
    textDecoration: "none"
}



const NavBar = () => {
    return (
        <>  
            <Container maxWidth="xl" style={styleNavBar}>
                <NavLink exact to="/" activeStyle={linkSelected} >
                        Home
                    </NavLink>
                    <NavLink to="/Rockets" activeStyle={linkSelected}>
                        Rockets
                    </NavLink>
                    <NavLink to="/Launches" activeStyle={linkSelected}>
                        Launches
                    </NavLink>

            </Container>
        </>
    )
}



export default NavBar;