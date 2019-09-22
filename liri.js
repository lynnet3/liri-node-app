require("dotenv").config();

var spotify = new Spotify(keys.spotify);

//getting the required info from each of these files so they can be read here
var key = require("./keys.js");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

// taking what the useer wants to like find a concert song movie or the random option
var action = process.argv[2];
// taking what the user has put in to find the results 
var input = process.argv[3];

//functions to execute each action
function concertInfo(){

}

function songInfo(){

}

function movieInfo(){

}

function doThis(){
    
}