const express = require('express');
const cors = require('cors');
const bodyParser =  require("body-parser");
const comics = require("./routes/comics.routes");

const PORT = process.env.PORT || 5000;

const app = express()

// Enable CORS
app.use(cors())

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () =>{
 console.log(`Server running on port ${PORT}`)
})

//Routes
app.use('/comics', comics)