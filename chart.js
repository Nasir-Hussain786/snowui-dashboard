// ========== USERS LINE CHART (Existing - unchanged) ==========
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



// ========== DEVICE TRAFFIC BAR CHART - EXACT FIGMA ==========
const deviceData = [
    { label: 'Linux', height: 61, color: '#0000000A' },
    { label: 'Mac', height: 114, color: '#0000000A' },
    { label: 'iOS', height: 81, color: '#0000000A' },
    { label: 'Windows', height: 130, color: '#0000000A' },
    { label: 'Android', height: 97, color: '#007AFF' },
    { label: 'Other', height: 48, color: '#0000000A' }
];

const maxDeviceHeight = 130;

let deviceOptions = {
    series: [{
        name: 'Traffic',
        data: deviceData.map(d => (d.height / maxDeviceHeight) * 100)
    }],
    chart: {
        type: 'bar',
        height: 200,
        toolbar: { show: false },
        parentHeightOffset: 0,
        animations: { enabled: false },
        events: {
            mounted: function() {
                setTimeout(addAndroidBadge, 100);
            },
            updated: function() {
                setTimeout(addAndroidBadge, 100);
            }
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '55%',
            borderRadius: 20,
            borderRadiusApplication: 'end',
            distributed: true,
            states: {
                hover: { filter: { type: 'none' } },
                active: { filter: { type: 'none' } }
            }
        }
    },
    colors: deviceData.map(d => d.color),
    dataLabels: { enabled: false },
    xaxis: {
        categories: deviceData.map(d => d.label),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            style: {
                colors: '#9CA3AF',
                fontSize: '12px',
                fontFamily: 'inherit'
            }
        }
    },
    yaxis: { show: false },
    grid: { show: false },
    legend: { show: false },
    tooltip: {
        enabled: true,
        y: { formatter: function(val) { return Math.round((val / 100) * maxDeviceHeight) + 'px'; } }
    },
    states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } }
    }
};

let deviceChart = new ApexCharts(document.querySelector("#device-chart"), deviceOptions);
deviceChart.render();

// ========== ANDROID BADGE - EXACT FIGMA ==========
function addAndroidBadge() {
    const existingBadge = document.querySelector('.android-badge');
    if (existingBadge) existingBadge.remove();
    
    const chartEl = document.querySelector("#device-chart");
    const svgEl = chartEl.querySelector('svg');
    if (!svgEl) return;
    
    const bars = svgEl.querySelectorAll('.apexcharts-bar-area');
    if (bars.length < 5) return;
    
    const androidBar = bars[4];
    const barRect = androidBar.getBoundingClientRect();
    const chartRect = chartEl.getBoundingClientRect();
    
    const badgeTop = barRect.top - chartRect.top - 52;
    const badgeLeft = barRect.left - chartRect.left + (barRect.width / 2);
    
    const badge = document.createElement('div');
    badge.className = 'android-badge';
    badge.style.cssText = `
        position: absolute;
        top: ${badgeTop}px;
        left: ${badgeLeft}px;
        transform: translateX(-50%);
        background: linear-gradient(180deg, #4A4A4A 0%, #2C2C2E 100%);
        color: white;
        width: 78px;
        height: 44px;
        border-radius: 24px;
        font-size: 18px;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        z-index: 10;
        pointer-events: none;
        letter-spacing: 0.3px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    badge.textContent = '243K';
    
    chartEl.style.position = 'relative';
    chartEl.appendChild(badge);
}


// ========== LOCATION TRAFFIC BAR CHART - EXACT FIGMA ==========
const locationData = [
    { label: 'US', height: 81, color: '#0000000A' },
    { label: 'Canada', height: 114, color: '#0000000A' },
    { label: 'Mexico', height: 97, color: '#0000000A' },
    { label: 'China', height: 48, color: '#0000000A' },
    { label: 'Japan', height: 130, color: '#0000000A' },
    { label: 'Australia', height: 65, color: '#0000000A' }
];

const maxLocationHeight = 130;

let locationOptions = {
    series: [{
        name: 'Traffic',
        data: locationData.map(d => (d.height / maxLocationHeight) * 100)
    }],
    chart: {
        type: 'bar',
        height: 200,
        toolbar: { show: false },
        parentHeightOffset: 0,
        animations: { enabled: false }
    },
    plotOptions: {
        bar: {
            columnWidth: '55%',
            borderRadius: 20,
            borderRadiusApplication: 'end',
            distributed: true,
            states: {
                hover: { filter: { type: 'none' } },
                active: { filter: { type: 'none' } }
            }
        }
    },
    colors: locationData.map(d => d.color),
    dataLabels: { enabled: false },
    xaxis: {
        categories: locationData.map(d => d.label),
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            style: {
                colors: '#9CA3AF',
                fontSize: '12px',
                fontFamily: 'inherit'
            }
        }
    },
    yaxis: { show: false },
    grid: { show: false },
    legend: { show: false },
    tooltip: {
        enabled: true,
        y: { formatter: function(val) { return Math.round((val / 100) * maxLocationHeight) + 'px'; } }
    },
    states: {
        hover: { filter: { type: 'none' } },
        active: { filter: { type: 'none' } }
    }
};

let locationChart = new ApexCharts(document.querySelector("#location-chart"), locationOptions);
locationChart.render();



// ========== PRODUCT TRAFFIC CHART - 48 COLUMNS ==========

// Base 6 columns ki exact detail (Top to Bottom: Black, TransBlack, Red)
const baseColumns = [
    { black: 15, transBlack: 17, red: 81 },      // Col 1: 117px total
    { black: 18, transBlack: 15, red: 80 },      // Col 2: 132px total
    { black: 23, transBlack: 28, red: 109 },     // Col 3: 164px total
    { black: 37, transBlack: 43, red: 96 },      // Col 4: 180px total
    { black: 22, transBlack: 22, red: 113 },     // Col 5: 161px total
    { black: 19, transBlack: 13, red: 105 },     // Col 6: 141px total
];

// Logic se baaki 42 columns generate karna
function generateColumns(base, count) {
    const columns = [...base];
    
    for (let i = base.length; i < count; i++) {
        const baseIndex = i % 6;
        const baseCol = base[baseIndex];
        
        // Random variation (-15% to +20%)
        const variation = () => 0.85 + Math.random() * 0.35;
        
        let black = Math.round(baseCol.black * variation());
        let transBlack = Math.round(baseCol.transBlack * variation());
        let red = Math.round(baseCol.red * variation());
        
        // Ensure minimum heights
        black = Math.max(8, Math.min(45, black));
        transBlack = Math.max(6, Math.min(50, transBlack));
        red = Math.max(45, Math.min(140, red));
        
        columns.push({ black, transBlack, red });
    }
    
    return columns;
}

// Generate 48 columns
const columnData = generateColumns(baseColumns, 48);

// Max height for scaling
const maxHeight = 200;

// Prepare series data - REVERSE ORDER for correct stacking (Bottom to Top)
// ApexCharts stacks: Series[0] = Bottom, Series[last] = Top
// We want: Top=Black, Center=TransBlack, Bottom=Red
// So: Series[0] = Red (Bottom), Series[1] = TransBlack (Center), Series[2] = Black (Top)

const redSeries = columnData.map(d => (d.red / maxHeight) * 100);
const transBlackSeries = columnData.map(d => (d.transBlack / maxHeight) * 100);
const blackSeries = columnData.map(d => (d.black / maxHeight) * 100);

// Generate month labels (4 columns per month)
const labels = [];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
for (let i = 0; i < 48; i++) {
    if (i % 4 === 0) {
        labels.push(months[Math.floor(i / 4)]);
    } else {
        labels.push('');
    }
}

let productOptions = {
    series: [
        {
            name: 'Red',
            data: redSeries
        },
        {
            name: 'TransBlack',
            data: transBlackSeries
        },
        {
            name: 'Black',
            data: blackSeries
        }
    ],
    chart: {
        type: 'bar',
        height: 320,
        toolbar: { show: false },
        parentHeightOffset: 0,
        animations: { enabled: false },
        stacked: true
    },
    plotOptions: {
        bar: {
            columnWidth: '3px',
            borderRadius: 2,
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'all'
        }
    },
    colors: ['#FF3B30', '#00000066', '#000000'],
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: labels,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
            style: {
                colors: '#9CA3AF',
                fontSize: '12px',
                fontFamily: 'inherit'
            },
            rotate: 0,
            hideOverlappingLabels: false
        },
        crosshairs: { show: false }
    },
    yaxis: {
        show: false,
        max: 100
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 10,
            bottom: 0,
            left: 10
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: true,
        shared: true,
        intersect: false
    },
    states: {
        hover: {
            filter: { type: 'none' }
        },
        active: {
            filter: { type: 'none' }
        }
    }
};

let productChart = new ApexCharts(document.querySelector("#product-chart"), productOptions);
productChart.render();