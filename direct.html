const calculateBtn = document.getElementById('calculateBtn');
const amountInput = document.getElementById('investmentAmount');
const assetSelect = document.getElementById('assetSelect');

const finalValueDisplay = document.getElementById('finalValueDisplay');
const profitDisplay = document.getElementById('profitDisplay');
const growthDisplay = document.getElementById('growthDisplay');

let roiChartInstance = null; 

const marketData = {
    "STABLE_INDEX": [
        150.00, 150.50, 151.20, 151.00, 151.80, 152.10, 152.50, 152.30, 153.00, 153.40,
        153.20, 154.00, 154.50, 154.10, 155.00, 155.60, 156.00, 155.80, 156.50, 157.00,
        156.80, 157.50, 158.20, 158.00, 158.90, 159.40, 159.10, 160.00, 160.50, 161.20
    ],
    "TECH_GROWTH": [
        310.00, 312.50, 308.20, 315.00, 318.80, 316.10, 322.50, 320.30, 325.00, 328.40,
        325.20, 332.00, 336.50, 331.10, 340.00, 345.60, 342.00, 339.80, 348.50, 352.00,
        349.80, 356.50, 362.20, 358.00, 368.90, 374.40, 370.10, 380.00, 385.50, 391.20
    ]
};

calculateBtn.addEventListener('click', () => {
    const amount = Number(amountInput.value);
    const asset = assetSelect.value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid initial starting amount.");
        return;
    }

    const priceHistory = marketData[asset];
    const startingPrice = priceHistory[0];
    const sharesOwned = amount / startingPrice;

    const projectedValues = priceHistory.map(price => {
        return (sharesOwned * price).toFixed(2);
    });

    const finalValue = projectedValues[projectedValues.length - 1];
    const totalProfit = (finalValue - amount).toFixed(2);
    const percentageGrowth = (((finalValue - amount) / amount) * 100).toFixed(2);

    const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

    updateDashboard(labels, projectedValues, finalValue, totalProfit, percentageGrowth);
});

function updateDashboard(labels, data, finalValue, totalProfit, percentageGrowth) {
    finalValueDisplay.innerText = `₹${finalValue}`;
    profitDisplay.innerText = `₹${totalProfit}`;
    growthDisplay.innerText = `${percentageGrowth}%`;

    const ctx = document.getElementById('roiChart').getContext('2d');

    if (roiChartInstance) {
        roiChartInstance.destroy();
    }

    roiChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Portfolio Value (₹)',
                data: data,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 10,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8', maxTicksLimit: 10 }
                }
            }
        }
    });
}