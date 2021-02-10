const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Create express instance
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);



// Routes
app.get("/", (req, res) => {
    res.send("We are at home");
})

// Connect to database
mongoose
    .connect(
        process.env.DB_CONNECTION, 
        { useNewUrlParser: true },
        // { useUnifiedTopology: true },
        () => console.log("Connected to DB")
    )

// Port and listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});