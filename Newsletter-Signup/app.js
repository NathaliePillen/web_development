//jshint esversion: 6

const express = require ("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

// Specify static files in a public folder
app.use(express.static("public"));

// setup bodyparser
app.use(bodyParser.urlencoded({extended: true}));

// get method for home run
app.get("/",function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

// post the input fields
app.post("/", function(req, res){
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = 'https://us19.api.mailchimp.com/3.0/lists/604cbed4c0';

    const options = {
        method: "POST",
        auth: "nathalie1:1ec7d1a4cde2de4993115278edac3dcb-us19"
    }

    const request = https.request(url, options, function(response){
        
        if (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }else{
            res.sendFile(__dirname + "/failure.html");
        }
        
            response.on("data", function(data){
            console.log(JSON.parse(data));
        })
        
    })

    //request.write(jsonData);
    request.end();

    console.log(firstName, lastName, email);

});

app.post("/failure", function(req, res){
    res.redirect("/");
});

// Check if server is running
app.listen(process.env.PORT || 3000, function (){
    console.log("Server is running on port 3000.")
});

//API key
//1ec7d1a4cde2de4993115278edac3dcb-us19
//unique id for audience 604cbed4c0