let options = {
    series: [{
        name: 'Users',
        data: [31, 40, 28, 51, 42, 109, 100]
    }],
    chart: {
        type: 'line',
        height: 300,
        toolbar: { show: false }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        colors: ['#AF52DE']
    },
    markers: {
        size: 5,
        colors: ['#fff'],
        strokeColors: '#AF52DE',
        strokeWidth: 2
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yaxis: {
        show: false
    },
    grid: {
        show: false
    }
};

let chart = new ApexCharts(document.querySelector("#users-chart"), options);
chart.render();