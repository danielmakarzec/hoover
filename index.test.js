const roomSizeXY = require('./index')
const hooverPositionXY = require('./index')
const hooverPositionX = require('./index')
const hooverFunction = require('./index')

test('Room size has 2 coordinates', () => {
  expect(roomSizeXY).toHaveLength(2);
});

test('Hoover position has 2 coordinates', () => {
  expect(hooverPositionXY).toHaveLength(2);
});

test('hooverPositionX is an object', () => {
  expect(typeof hooverPositionX).toBe('object');
});


// TODO
