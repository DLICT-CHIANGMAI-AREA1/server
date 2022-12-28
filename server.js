// configs

const express = require("express");
const expressUploader = require("express-fileupload");
const app = express();

require('dotenv').config();
const cors = require("cors");
const router = require("./routes");
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(expressUploader());

app.use("/uploads", express.static("uploads"));
app.use(router);

const listener = app.listen(PORT, () => {
    console.log("Server is running on port " + listener.address().port);
});
