require("dotenv").config();

var spotify = new Spotify(keys.spotify);

//getting the required info from each of these files so they can be read here
var key = require("./keys.js");
//read the spotify file in the node modules
var Spotify = require("node-spotify-api");
//read moment
var moment = require("moment");
//read axios
var axios = require("axios");
//read random.txt
var fs = require("fs");

// taking what the useer wants to like find a concert song movie or the random option
var action = process.argv[2];
// taking what the user has put in to find the results 
var input = process.argv[3];

// the switch so when the user puts in the comand it changes to the name of the function its conneted to then stop
switch (action) {
    case "concert-this":
        concertInfo(input);
        break;

    case "spotify-this-song":
        songInfo(input);
        break;

    case "movie-this":
        movieInfo(input);
        break;

    case "do-what-it-says":
        doThis(input);
        break;
}

//functions to execute each action
function concertInfo(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // for when theres multiple differnt events happening
            for (var i = 0; i < response.data.length; i++) {
                // if theres nothing put into the argument it will return that nothing was found
                if (artist === "undefined") {
                    console.log("No results found")
                } else {
                    var when = moment(response.data[i].datetime);
                    console.log(
                        "\n Venue: " + response.data[i].venue.name +
                        "\n Location: " + response.data[i].venue. city +
                        "\n Date: " + when.format("MMM Do, YYYY hh:mm:ss")
                    );
                    
                }
            }


        })
}

function songInfo(input) {

    //if theres nothing put into the third argument it will make it The Sign
    if (input === "undefined") {
        input = "The Sign"
    }
}

function movieInfo(input) {

    //if there nothing put into the third argument it will make it Mr. Nobody
    if (input === "undefined") {
        input = "Mr. Nobody"
    }
}

function doThis(input) {

    fs.readFile("random.txt", "utf8", function (err, data) {

        // if theres an error with the code it will log the error in the console
        if (err) {
            return console.log(err);
        }
        // logs out the data
        //console.log(data);
        // splits the info with spaces
        var dataArry = data.split(",");
        //will run the spotify function with the text from random.txt
        songInfo(dataArry[1]);
    });
}