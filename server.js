require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { mongoOptions, sessionOptions } = require("./utils/config");
const routes = require("./routes");
const app = express();
const expfile = require("express-fileupload");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./utils/passport");
const logger = require("morgan");

const PORT = process.env.PORT || 3001;

app.use(expfile({ useTempFiles: true }))
const cloudinary = require("cloudinary").v2

cloudinary.config({
	cloud_name: "storexapp",
	api_key: "275742714789443",
	api_secret: "U2pqFQLNciYoBofe09aVb-9QWoU"
})

// logging (development)
app.use(logger("dev"));

// app.use()
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from react build
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern", mongoOptions);

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/mern",
	{
	useCreateIndex: true,
	useNewUrlParser: true
	}
);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
