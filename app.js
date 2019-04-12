/**
 *
 * author: Ruchitesh Malukani
 */
const request = require('request');
const yargs = require('yargs');
const argv = yargs.argv
console.log(argv);
let address = argv["address"];

let encodedAddress = encodeURI(address);

const keys=require('./getApi').getApi();
const  apikey=keys[0];
const darkskykey=keys[1];

var requestUrl=`https://us1.locationiq.com/v1/search.php?key=${apikey}&q=${encodedAddress}&format=json`;
console.log(requestUrl);

const axios =  require('axios');

axios.get(requestUrl).then((response)=>{
    console.log(response['data'][0]['lat']);
    let lat=response['data'][0]['lat'];
    console.log(response['data'][0]['lon']);
    let lon = response['data'][0]['lon'];
    axios.get(`https://api.darksky.net/forecast/${darkskykey}/${lat},${lon}`).then((response)=>{
        console.log(response['data']['hourly']['summary']);
    }).catch((error)=>{
        console.log(error);
    });;

}).catch((error)=>{
    console.log(error);
});

