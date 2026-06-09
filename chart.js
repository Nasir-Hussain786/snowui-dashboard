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