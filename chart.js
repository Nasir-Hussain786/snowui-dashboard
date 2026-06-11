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

// ========== DEVICE TRAFFIC BAR CHART ==========
let deviceOptions = {
    series: [{
        name: 'Traffic',
        data: [15, 25, 20, 35, 45, 10]
    }],
    chart: {
        type: 'bar',
        height: 240,
        toolbar: { show: false },
        parentHeightOffset: 0,
        animations: {
            enabled: false
        },
        events: {
            mounted: function(chartContext, config) {
                setTimeout(() => {
                    addAndroidBadge();
                }, 100);
            },
            updated: function(chartContext, config) {
                setTimeout(() => {
                    addAndroidBadge();
                }, 100);
            }
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '72%',
            borderRadius: 8,
            borderRadiusApplication: 'end',
            distributed: true,
            states: {
                hover: {
                    filter: {
                        type: 'none'
                    }
                },
                active: {
                    filter: {
                        type: 'none'
                    }
                }
            }
        }
    },
    colors: ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#007AFF', '#E5E7EB'],
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Linux', 'Mac', 'iOS', 'Windows', 'Android', 'Other'],
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
    yaxis: {
        show: false,
        max: 55
    },
    grid: {
        show: false,
        padding: {
            top: 40,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: true,
        y: {
            formatter: function(val) {
                return val + '%';
            }
        }
    },
    states: {
        hover: {
            filter: {
                type: 'none'
            }
        },
        active: {
            filter: {
                type: 'none'
            }
        }
    }
};

let deviceChart = new ApexCharts(document.querySelector("#device-chart"), deviceOptions);
deviceChart.render();

// Function to add Android badge - EXACT like screenshot
function addAndroidBadge() {
    // Remove existing badge if any
    const existingBadge = document.querySelector('.android-badge');
    if (existingBadge) existingBadge.remove();
    
    const chartEl = document.querySelector("#device-chart");
    const svgEl = chartEl.querySelector('svg');
    if (!svgEl) return;
    
    // Find Android bar (5th bar, index 4)
    const bars = svgEl.querySelectorAll('.apexcharts-bar-area');
    if (bars.length < 5) return;
    
    const androidBar = bars[4];
    const barRect = androidBar.getBoundingClientRect();
    const chartRect = chartEl.getBoundingClientRect();
    
    // Calculate position
    const badgeTop = barRect.top - chartRect.top - 42;
    const badgeLeft = barRect.left - chartRect.left + (barRect.width / 2);
    
    // Create badge element - EXACT like screenshot
    const badge = document.createElement('div');
    badge.className = 'android-badge';
    badge.style.cssText = `
        position: absolute;
        top: ${badgeTop}px;
        left: ${badgeLeft}px;
        transform: translateX(-50%);
        background: #2C2C2E;
        color: white;
        padding: 8px 16px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        white-space: nowrap;
        z-index: 10;
        pointer-events: none;
        letter-spacing: 0.3px;
    `;
    badge.textContent = '243K';
    
    // Small arrow below badge - EXACT like screenshot
    const arrow = document.createElement('div');
    arrow.style.cssText = `
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #2C2C2E;
    `;
    badge.appendChild(arrow);
    
    // Make chart container relative for absolute positioning
    chartEl.style.position = 'relative';
    chartEl.appendChild(badge);
}



// ========== LOCATION TRAFFIC BAR CHART ==========
let locationOptions = {
    series: [{
        name: 'Traffic',
        data: [50, 30, 20, 40, 25, 15]
    }],
    chart: {
        type: 'bar',
        height: 200,
        toolbar: { show: false },
        parentHeightOffset: 0,
        animations: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '72%',
            borderRadius: 8,
            borderRadiusApplication: 'end',
            distributed: true,
            states: {
                hover: {
                    filter: {
                        type: 'none'
                    }
                },
                active: {
                    filter: {
                        type: 'none'
                    }
                }
            }
        }
    },
    colors: ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB'],
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['US', 'Canada', 'Mexico', 'China', 'Japan', 'Australia'],
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
    yaxis: {
        show: false,
        max: 60
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    legend: {
        show: false
    },
    tooltip: {
        enabled: true
    },
    states: {
        hover: {
            filter: {
                type: 'none'
            }
        },
        active: {
            filter: {
                type: 'none'
            }
        }
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