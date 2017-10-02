let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");


let PORT = process.env.PORT || 8081;

mongoose.connect(`mongodb://dakotaheninger:dh1133094@ds151163.mlab.com:51163/teamdeathmatch`, (err) =>{
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to DB');
    }
});

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () =>{
    console.log(`Server is started on port ${PORT}`);
});