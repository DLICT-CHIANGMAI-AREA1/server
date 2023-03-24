const { GoogleAuth } = require("google-auth-library");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())

require("dotenv").config();

async function getAnalyticsData() {
    const auth = new GoogleAuth({
        keyFile: "./key.json",
        scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });
    const analyticsDataClient = new BetaAnalyticsDataClient({
        auth,
    });
    const [response] = await analyticsDataClient.runRealtimeReport({
        property: "properties/358907276",
        metrics: [
            {
                name: "activeUsers",
            },
        ],
    });

    const numberOfUsers = response.rows[0].metricValues[0].value;
    return numberOfUsers;
}

async function getAnalyticsData2() {
    const auth = new GoogleAuth({
        keyFile: "./key.json",
        scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });
    const analyticsDataClient = new BetaAnalyticsDataClient({
        auth,
    });
    const [response] = await analyticsDataClient.runReport({
        property: "properties/358907276",
        dateRanges: [
            {
                startDate: "7daysAgo",
                endDate: "today",
            },
        ],
        metrics: [
            {
                name: "newUsers",
            },
            {
                name: "sessions",
            },
        ],
    });

    const numberOfUsers = response.rows[0].metricValues[0].value;
    return numberOfUsers;
}

app.get("/UserOnline", async (req, res) => {
    try {
        const numberOfUsers = await getAnalyticsData();
        res.send(`Number of users visiting right now: ${numberOfUsers}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data from Google Analytics");
    }
});

app.get("/AllUserVisit", async (req, res) => {
    try {
        const numberOfUsers = await getAnalyticsData2();
        res.send(`Number of users visiting all : ${numberOfUsers}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data from Google Analytics");
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
