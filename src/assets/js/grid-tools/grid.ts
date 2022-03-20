/**
 * For efficiency purposes, grid should be stored as a 1-D array
 * If we imagine the bottom-left corner of a grid is the start:
 *   - moving horizontally to the right increments the index by 1
 *   - moving vertically upwards increments the index by the grid's width
 * 
 **/

type Space = {
    idx: number,
    hasRobot: boolean,
}

export type Grid = {
    dimensions: {width: number, height: number}    
}


// Given a set width and height, returns an array of spaces that represents the grid
export function generateGrid(grid:Grid) {
    return new Array(grid.dimensions.width*grid.dimensions.height).fill('O');
}

//updates the snapshot of the robot's position on the board
export function updateGrid(robotPosition: number, grid: any[]) {
    const lastPosition = grid.indexOf('X'); //gets the last marked position of the robot
    grid[lastPosition] = 'O';
    grid[robotPosition] = 'X';
    console.log(grid);
}

// confirms whether the robot is on the starting space - necessary for determining explosion
export function isStartSpace(position: number) {
    return (position === 0);
}



