import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    backgroud: '#f4f4f4',
                    foreColor: '#333'
                },
                xaxis: {
                    categories: ['Tokyo', 
                    'Delhi', 
                    'Shanghai', 
                    'Sao Paulo', 
                    'Mumbai', 
                    'Mexico City']
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                fill: {
                    colors: ['#f44336']
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Largest cities in the world',
                    align: "center",
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: "25px"
                    }
                }
            },

            series: [{
                name: 'Population',
                data: [38001000, 
                    25703168, 
                    23740778, 
                    21066245, 
                    21042538, 
                    20998543]
                }]
        }
    }

    onClick = () => {
            this.setState({
                options: {
                    ...this.state.options,
                    plotOptions: {
                        ...this.state.options.plotOptions,
                        bar: {...this.state.options.plotOptions.bar,
                            horizontal: !this.state.options.plotOptions.bar.horizontal
                        }
                    }
                }
            });
        };

    render() {
        return( 
            <React.Fragment>
                <Chart 
                    options={this.state.options}
                    series={this.state.series}
                    type="bar" 
                    height="450" 
                    width="100%"
                /> 
                <button onClick={this.onClick}>Change display</button>
            </React.Fragment>
        );
    }
};

export default PopChart;