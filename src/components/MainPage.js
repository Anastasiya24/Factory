import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    paper:{
        margin: '30px auto',
        padding: 30,
        minWidth: 240,
        maxWidth: 500,
        opacity: 0.95
    }
});

class MainPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={1}>
                    <center>
                        <Typography variant="display1" gutterBottom style={{ display: 'inline-block' }}>
                            Введите период
                        </Typography>
                        <br />
                        <TextField
                            id="date"
                            label="С"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                        />
                        <TextField
                            id="date"
                            label="До"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                        />
                        <div>
                            <Button variant="contained" className={classes.button}
                                onClick={()=>this.props.history.push('/date/quality')}
                            >
                                Качество
                            </Button>
                            <br />
                            <Button variant="contained" color="primary" className={classes.button}>
                                Отгрузка
                            </Button>
                            <br />
                            <Button variant="contained" color="secondary" className={classes.button}>
                                Сдача
                            </Button>
                            <br />
                            <Button variant="contained" style={{ backgroundColor: 'yellow' }} className={classes.button}>
                                Ткацкая фабрика
                            </Button>
                            <br />
                            <Button variant="contained" href="#contained-buttons" className={classes.button}>
                                План производства
                            </Button>
                        </div>
                    </center>
                </Paper>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(MainPage));