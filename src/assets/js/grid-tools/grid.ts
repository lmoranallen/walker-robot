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


// Given a set width and height, returns an array of spaces that represents the grid
export function generateGrid(width: number, height: number) {
    return new Array(width*height).fill('O');
}

// confirms whether the robot is on the starting space - necessary for determining
export function isStartSpace(position: number) {
    return (position === 0);
}



