import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import GridM from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const gridColumn = [
    { name: 'articte', title: 'Артикул' },
    { name: 'material', title: 'Всего разобрано,м' },
    { name: 'plan', title: '1 сорт: План' },
    { name: 'fact', title: '1 сорт: Факт' }
];

const gridRows = [
    { articte: 'A1', material: 1000, plan: 20, fact: 12 },
    { articte: 'A2', material: 2000, plan: 40, fact: 38 },
    { articte: 'A3', material: 3000, plan: 50, fact: 43 },
    { articte: 'A4', material: 4000, plan: 80, fact: 55 },
];

class Quality extends Component {
    Cell = (props) => {
        return <Table.Cell {...props} />;
    };


    TableRow = ({ row, ...restProps }) => (
        <Table.Row id={row.articte}
            {...restProps}
            style={{ cursor: 'pointer' }}
            onClick={() => this.props.history.push(`/quality/article/${row.articte}`)}
        />
    );

    render() {
        return (
            <div>
                <div className='statistic' style={{ margin: '10px' }}>
                    <Paper style={{ margin: 30, padding: 20 }}>
                        <GridM container spacing={24}>
                            <GridM item xs={5}>
                                <Typography variant="headline" style={{ margin: '30px 0 10px 30px' }} >Статистика</Typography>
                                {/* TODO */}
                                <Typography variant="subheading">Разбраковано по плану: 89 %</Typography>
                                <Typography variant="subheading">Разбраковано по факту: 75 %</Typography>
                                <Typography variant="subheading">Кромка: 98745 кг</Typography>
                                <Typography variant="subheading">Разбраковано: 1234567 м</Typography>
                            </GridM>
                            <GridM item xs={5}>
                                <Typography variant="subheading" style={{ margin: '30px 0 10px 30px' }} >В том числе: </Typography>
                                <ul>
                                    <li><Typography variant="subheading">1 сорт 854262 </Typography></li>
                                    <li><Typography variant="subheading">2 сорт 354262 </Typography></li>
                                    <li><Typography variant="subheading">3 сорт 454262 </Typography></li>
                                    <li><Typography variant="subheading">м/д отр. 154262 </Typography></li>
                                </ul>
                            </GridM>
                        </GridM>
                    </Paper>
                </div>
                <Paper style={{ margin: 30, padding: 20 }}>
                    <Grid
                        columns={gridColumn}
                        rows={gridRows}
                    >
                        <Table rowComponent={this.TableRow} cellComponent={this.Cell} />
                        {/* <Table /> */}
                        <TableHeaderRow />
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withRouter(Quality);