import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
//tab
import Chart1Poroki from './Chart1Poroki'

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
                <center>
                    <Typography variant="display1" gutterBottom style={{ margin: 30, color: 'white' }}>
                        Информация об артикле № {this.props.match.params.articleId}
                    </Typography>
                    <div className={classes.root}>
                        <AppBar position="static" style={{backgroundColor: 'white', color: 'black'}}>
                            <center>
                                <Tabs value={value} onChange={this.handleChange}>
                                    <Tab label="Пороки" />
                                    <Tab label="Критерий 2" />
                                    <Tab label="Критерий 3" href="#basic-tabs" />
                                </Tabs>
                            </center>
                        </AppBar>
                        {value === 0 && <TabContainer><Chart1Poroki /></TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                        {value === 2 && <TabContainer>Item Three</TabContainer>}
                    </div>
                </center>
            </div>
        )
    }
}

export default withStyles(styles)(Article);