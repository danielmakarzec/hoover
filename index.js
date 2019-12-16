// fs node module is going to be required to interact with the file system
const fs = require('fs');

// read input file
const data = fs.readFileSync('input.txt', 'utf8');

// access each line individually + remove empty values
let lines = Array.from(data.split('\n').filter(n => n));

// hover instructions (always the last line)
const hooverMoves = Array.from(lines.pop());

// convert all the rest values to numbers (coordinates)
let coordinates = lines.map(element => {
  return element.match(/(\w+)/g).map(number => parseInt(number));
});

// size of the room (always the first line)
const roomSizeXY = coordinates.shift();
const roomSizeX = roomSizeXY[0];
const roomSizeY = roomSizeXY[1];

// initial position of the hoover ( always the second line)
const hooverPositionXY = coordinates.shift();
let hooverPositionX = hooverPositionXY[0];
let hooverPositionY = hooverPositionXY[1];

// an array of all the positions of all dirty patches
const dirtPositions = coordinates;
