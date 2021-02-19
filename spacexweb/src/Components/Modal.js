import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 500,
    },
}));

export default function AnimatedModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    if (props.var == null){
        return (
            <div></div>
        )
    }else {
    if (props.page === 'Launch') {
        return(
            <div>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                More
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>{props.var.mission_name}</h2>
                        <hr></hr>
                        <ul>
                            <li>Launch year: {props.var.launch_year} </li>
                            <li>Rocket name: {props.var.rocket.rocket_name} </li>
                            <li>Launch Success: {props.var.launch_success == true ? 'success' : 'failed'} </li>
                        </ul>
                        <p>
                        {props.var.details}
                        </p>
                    </div>
                </Fade>
            </Modal>
            </div>
        )
    }
    if (props.page === 'Rocket') {
    return (
        <div>

            <Button variant="contained" color="primary" onClick={handleOpen}>
                More
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>{props.var.rocket_name}</h2>
                        <hr></hr>
                        <ul>
                            <li>First flight: {props.var.first_flight} </li>
                            <li>Height: {props.var.height.meters} meters</li>
                            <li>Diameter: {props.var.diameter.meters} meters</li>
                            <li>Mass: {props.var.mass.kg} kg</li>
                        </ul>
                        <p>
                        {props.var.description}
                        </p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );}}
}