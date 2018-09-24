import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";

// const express = require("express");
// const bodyParser = require("body-parser");
// const router = require("./routes/index");

//setup the express app
const app = express();

//Parse incoming requests data
// app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

// module.exports = app;
export default app;