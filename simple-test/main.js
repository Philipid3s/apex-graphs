// Chart options
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'bar',
        backgroud: '#f4f4f4',
        foreColor: '#333'
    },

    series: [{
        name: 'Population',
        data: [38001000, 
            25703168, 
            23740778, 
            21066245, 
            21042538, 
            20998543]
    }],

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
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Event method
document.querySelector('button').addEventListener('click', () =>
    chart.updateOptions({
        plotOptions: {
            bar: {
            horizontal: true
            }
        }
    })
);