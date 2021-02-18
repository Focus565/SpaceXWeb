import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';

const Cards = (props) => {
    if (props.var == null){
        return (
            <div></div>
        )
    }else {
    if (props.page === 'Rocket'){
        return (
        <Card>
            <CardMedia style = {{ height: 0, paddingTop: '50%'}} image={(props.var.flickr_images)}/>
            <CardContent ><h2>{props.var.rocket_name}</h2>{props.var.description}</CardContent>
            <Button variant="contained" color="primary" href="#contained-buttons">
            more
            </Button>
        </Card>
        )
    }
    if(props.page === 'Launch'){
        return(
            <Card>
            <CardMedia style = {{ height: 200,width:200}} image={(props.var.links.mission_patch)}/>
            <CardContent ><h2>{props.var.mission_name}</h2></CardContent>
            <Button variant="contained" color="primary" href="#contained-buttons">
            more
            </Button>
        </Card>
        )
    }
}
}
export default Cards
