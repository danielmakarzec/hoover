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

// counter for patches hoover cleaned up
let cleanScore = 0;

// function checks if the current patch is clean or not and changes the status if so.
const dirtCheck = positions => {
  positions.forEach(position => {
    if (position[0] === hooverPositionX && position[1] == hooverPositionY) {
      cleanScore++;
      position[0] = 'cleaned';
      position[1] = 'cleaned';
    };
  });
};

// calculating the final position of the hoover
const hooverFunction = (moves) => {
  moves.forEach(move => {
    if (move === 'N') { if (hooverPositionY < roomSizeY-1) {hooverPositionY ++} };
    if (move === 'S') { if (hooverPositionY > 0) {hooverPositionY --} };
    if (move === 'E') { if (hooverPositionX < roomSizeX-1) {hooverPositionX ++} };
    if (move === 'W') { if (hooverPositionX > 0) {hooverPositionX --} };

    dirtCheck(dirtPositions);
  });
};

hooverFunction(hooverMoves);

// results
console.log(`final hoover position(X Y): ${hooverPositionX} ${hooverPositionY}`);
console.log(`patches of dirt the robot cleaned up: ${cleanScore}`);

module.exports = roomSizeXY, hooverPositionXY, hooverPositionX, hooverFunction;
