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
function concertInfo() {

}

function songInfo() {

}

function movieInfo() {

}

function doThis() {

}