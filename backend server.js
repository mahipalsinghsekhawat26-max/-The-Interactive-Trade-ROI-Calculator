const express = require('express');
const cors = require('cors');
const marketData = require('./data.json');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/calculate-roi', (req, res) => {
    const { initialAmount, assetType } = req.body;

    if (!initialAmount || initialAmount <= 0) {
        return res.status(400).json({ error: "Please enter a valid initial amount." });
    }

    const priceHistory = marketData.stocks[assetType];
    
    if (!priceHistory) {
        return res.status(404).json({ error: "Asset data not found." });
    }

    const startingPrice = priceHistory[0];
    const sharesOwned = initialAmount / startingPrice;

    const projectedValues = priceHistory.map(price => {
        return (sharesOwned * price).toFixed(2);
    });

    const finalValue = projectedValues[projectedValues.length - 1];
    const totalProfit = (finalValue - initialAmount).toFixed(2);
    const percentageGrowth = (((finalValue - initialAmount) / initialAmount) * 100).toFixed(2);

    res.json({
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        data: projectedValues,
        summary: {
            finalValue: finalValue,
            totalProfit: totalProfit,
            percentageGrowth: percentageGrowth
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running locally on http://localhost:${PORT}`);
});