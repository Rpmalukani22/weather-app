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

const apikey=require('./getApi').getApi();

var requestUrl=`https://maps.google.com/maps/api/geocode/json?address=${address}&key=${apikey}`;
console.log(requestUrl);