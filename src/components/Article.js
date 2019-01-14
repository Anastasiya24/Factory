import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//tab
import Chart1Poroki from './Chart1Poroki';
import LineChart from './LineChart';
import ChartColumn from './ChartColumn'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});


class Article extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div>
                <Button variant="contained" className={classes.button}
                    style={{margin: '30px 0 0 30px'}}
                    onClick={() => this.props.history.push('/date/quality')}
                >
                    Назад
                </Button>
                <center>
                    <Typography variant="display1" gutterBottom style={{ margin: 30, color: 'white', textShadow: '0 0 7px black' }}>
                        Информация об артикле № {this.props.match.params.articleId}
                    </Typography>
                    <div style={{ backgroundColor: 'white' }}>
                        <Paper className={classes.root}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="Пороки" />
                                <Tab label="Критерий 2" />
                                <Tab label="Критерий 3" />
                            </Tabs>
                        </Paper>
                        {value === 0 && <TabContainer><Chart1Poroki /></TabContainer>}
                        {value === 1 && <TabContainer><LineChart /></TabContainer>}
                        {value === 2 && <TabContainer><ChartColumn /></TabContainer>}
                    </div>

                </center>
            </div>
        )
    }
}

export default withStyles(styles)(Article);