/**
 * For efficiency purposes, grid should be stored as a 1-D array
 * If we imagine the bottom-left corner of a grid is the start:
 *   - moving horizontally to the right increments the index by 1
 *   - moving vertically upwards increments the index by the grid's width
 *
 **/
// Given a set width and height, returns an array of spaces that represents the grid
export function generateGrid(grid) {
    const robotGrid = new Array(grid.dimensions.width * grid.dimensions.height).fill('O');
    robotGrid[0] = 'X'; //initialises robot's position
    return robotGrid;
}
//updates the snapshot of the robot's position on the board
export function updateGrid(robotPosition, grid) {
    const lastPosition = grid.indexOf('X'); //gets the last marked position of the robot
    grid[lastPosition] = 'O';
    grid[robotPosition] = 'X';
    console.log(grid);
}
