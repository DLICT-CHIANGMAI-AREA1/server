// configs
const express = require("express");
const app = express();
const cors = require('cors')
const router = require("./routes");
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static('uploads'))
app.use(router);

const listener = app.listen(PORT, () => {
	console.log("Server is running on port " + listener.address().port);
});
