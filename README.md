## -The-Interactive-Trade-ROI-Calculator ##

* A lightweight, full-stack web application designed to simulate and visualize 30-day return on investment (ROI) based on historical asset data.

* This project was built to demonstrate a clean separation of frontend client logic and a backend REST API without relying on heavy frameworks. It uses a custom Node.js server to process calculations and returns formatted data for client-side rendering.

# Features

Dynamic ROI Calculation: Calculates projected returns based on a user-defined initial investment amount and a selected asset risk profile.

Data Visualization: Renders a responsive, animated line chart of the 30-day trajectory using Chart.js.

Modern UI: Features a dark-themed, glassmorphism interface built entirely with vanilla CSS.

RESTful API: A lightweight Express backend that validates inputs, processes the financial logic, and serves the data payload.

# Tech Stack

* Frontend: HTML5, CSS3, Vanilla JavaScript, Chart.js

* Backend: Node.js, Express.js

   Data: Local JSON (simulated historical market data)

## Project Structure

capstone-roi-calculator/
├── backend/
│   ├── data.json      # Flat file acting as our database
│   └── server.js      # Express server and calculation logic
└── frontend/
    ├── index.html     # Dashboard structure
    ├── style.css      # UI styling and layout
    └── app.js         # API fetching and chart rendering


# How to Run Locally

To run this project on your local machine, you will need to have Node.js installed.

# 1. Start the Backend Server

Open your terminal, navigate to the backend folder, and install the required dependencies:

cd backend
npm init -y
npm install express cors


* Start the server:

node server.js


The server should now be running on http://localhost:3000.

* 2. Launch the Frontend

Leave the terminal running in the background. Open the frontend folder and simply double-click the index.html file to open it in your web browser.

Enter an amount, select an asset profile, and click "Project Returns" to test the API connection.

# Future Improvements

[ ] Integrate a live financial API (like Yahoo Finance or Alpha Vantage) to replace the static data.json file.

[ ] Add user authentication to save past projections.

[ ] Implement a date-range picker for custom projection lengths.
