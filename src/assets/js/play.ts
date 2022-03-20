import { explodeRobot, handleMoveRobot } from "./robot-tools/robot.js";
import { generateGrid, updateGrid } from "./grid-tools/grid.js"
import {Robot} from "./robot-tools/robot";


const GRID_HEIGHT = prompt("Choose the height of the grid");
const GRID_WIDTH = prompt("Choose the width of the grid");

console.log(`The grid is of size ${GRID_HEIGHT}x${GRID_WIDTH}`);

const userRobot:Robot = {position: 0,charge: 13, maxCharge: 13,name: 'Leechay', hasExploded: false}
const grid = generateGrid({dimensions: {width: 5, height: 5}})

window.addEventListener("keydown", (event:KeyboardEvent) => {
    //for now keep as 5x5, once working - expand to provide arguments for game
    if(userRobot.hasExploded) return;
    handleMoveRobot(userRobot,event.key, {width: 5, height:5});
    updateGrid(userRobot.position, grid);
    console.log(`Robot charge ${userRobot.charge}`);
    explodeRobot(userRobot);
}, true);
