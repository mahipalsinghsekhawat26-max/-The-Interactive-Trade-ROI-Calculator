const calculateBtn = document.getElementById('calculateBtn');
const amountInput = document.getElementById('investmentAmount');
const assetSelect = document.getElementById('assetSelect');

const finalValueDisplay = document.getElementById('finalValueDisplay');
const profitDisplay = document.getElementById('profitDisplay');
const growthDisplay = document.getElementById('growthDisplay');

let roiChartInstance = null; 

calculateBtn.addEventListener('click', async () => {
    const amount = amountInput.value;
    const asset = assetSelect.value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid initial starting amount.");
        return;
    }

    try {
        const response = await fetch('https://the-interactive-trade-roi-calculator.onrender.com/api/calculate-roi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ initialAmount: Number(amount), assetType: asset })
        });

        const data = await response.json();

        if (data.error) {
            alert(data.error);
            return;
        }

        updateDashboard(data);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to connect to the backend server.");
    }
});

function updateDashboard(data) {
    finalValueDisplay.innerText = `₹${data.summary.finalValue}`;
    profitDisplay.innerText = `₹${data.summary.totalProfit}`;
    growthDisplay.innerText = `${data.summary.percentageGrowth}%`;

    const ctx = document.getElementById('roiChart').getContext('2d');

    if (roiChartInstance) {
        roiChartInstance.destroy();
    }

    roiChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Portfolio Value (₹)',
                data: data.data,
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
