import { handleMoveRobot } from "./robot-tools/robot.js";
import {Robot} from "./robot-tools/robot";

const GRID_LENGTH = prompt("Choose the length of the grid");
const GRID_WIDTH = prompt("Choose the width of the grid");

console.log(`The grid is of size ${GRID_LENGTH}x${GRID_WIDTH}`);

const userRobot:Robot = {position: 0,charge: 13, maxCharge: 13,name: 'Leechay'}
// const screen = document.getElementById('content');
window.addEventListener("keydown", (event:KeyboardEvent) => {
    //console.log(event.key);
    // if(event.defaultPrevented) return;
    handleMoveRobot(userRobot,event.key);
}, true);
