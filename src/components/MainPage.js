import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Currency from './Currency';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    margin: '30px auto',
    padding: 30,
    minWidth: 240,
    maxWidth: 500,
    opacity: 0.95
  }
});

//  Added input mask
function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function mask(event) {
  var matrix = '+375 (__) ___ - __ - __',
    i = 0,
    def = matrix.replace(/\D/g, ''),
    val = this.value.replace(/\D/g, '');
  if (def.length >= val.length) val = def;
  this.value = matrix.replace(/./g, function(a) {
    return /[_\d]/.test(a) && i < val.length
      ? val.charAt(i++)
      : i >= val.length
      ? ''
      : a;
  });
  if (event.type === 'blur') {
    if (this.value.length === 2) this.value = '';
  } else setCursorPosition(this.value.length, this);
}

class MainPage extends Component {
  state = {
    initialSum: null,
    finalSum: null,
    finallyCurrency: null,
    initialCurrency: null
  };

  componentDidMount() {
    var input = document.querySelector('#tel');
    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);

    // currency
    fetch('https://currency-convert.azurewebsites.net/get-currency').then(
      result => {
        result.json().then(data => {
          this.setState({
            initialSum: data.initialSum,
            finalSum: data.finalSum,
            finallyCurrency: data.finallyCurrency,
            initialCurrency: data.initialCurrency
          });
        });
      }
    );
  }

  render() {
    let { initialSum, initialCurrency, finalSum, finallyCurrency } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Currency
          initialSum={initialSum}
          initialCurrency={initialCurrency}
          finalSum={finalSum}
          finallyCurrency={finallyCurrency}
        />
        <Paper className={classes.paper} elevation={1}>
          <center>
            <p>Phone please</p>
            <input value='' id='tel' />
          </center>
          <center>
            <Typography
              variant='display1'
              gutterBottom
              style={{ display: 'inline-block' }}
            >
              Введите период
            </Typography>
            <br />
            <TextField
              id='date'
              label='С'
              type='date'
              defaultValue='2017-05-24'
              className={classes.textField}
            />
            <TextField
              id='date'
              label='До'
              type='date'
              defaultValue='2017-05-24'
              className={classes.textField}
            />
            <div>
              <Button
                variant='contained'
                className={classes.button}
                onClick={() => this.props.history.push('/quality')}
              >
                Качество
              </Button>
              <br />
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
              >
                Отгрузка
              </Button>
              <br />
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                Сдача
              </Button>
              <br />
              <Button
                variant='contained'
                style={{ backgroundColor: 'yellow' }}
                className={classes.button}
              >
                Ткацкая фабрика
              </Button>
              <br />
              <Button
                variant='contained'
                href='#contained-buttons'
                className={classes.button}
              >
                План производства
              </Button>
            </div>
          </center>
        </Paper>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(MainPage));
