// fs node module is going to be required to interact with the file system
const fs = require('fs');

// read input file
const data = fs.readFileSync('input.txt', 'utf8');

// access each line individually + remove empty values
let lines = Array.from(data.split('\n').filter(n => n));
