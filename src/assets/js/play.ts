import { explodeRobot, handleMoveRobot } from "./robot-tools/robot.js";
import { generateGrid, updateGrid } from "./grid-tools/grid.js"
import {Robot} from "./robot-tools/robot";

//NOTE: For different settings, feel free to experiment with the below:
const GRID_HEIGHT = 6;
const GRID_WIDTH = 6;

const MAX_CHARGE = 13;
const NAME = 'Leechay'

console.log(`The grid is of size ${GRID_HEIGHT}x${GRID_WIDTH}`);

const userRobot:Robot = {position: 0,charge: MAX_CHARGE, maxCharge: MAX_CHARGE,name: NAME, hasExploded: false, score: 0}
const grid = generateGrid({dimensions: {width: GRID_WIDTH, height: GRID_HEIGHT}})

const canvas:any = document.getElementById('myCanvas');


/*
*
* Canvas content purely for visual demonstration purposes
*
*/
function randomColor() {
    return ('#' + Math.floor(Math.random() * 16777215).toString(16));
}


//@ts-ignore
var ctx = canvas.getContext("2d");
// ctx.rotate(90 * Math.PI / 180);
//@ts-ignore
var cw = canvas.width;
//@ts-ignore
var ch = canvas.height;
var padding = 5;  
var w = (cw - padding * GRID_HEIGHT) / GRID_HEIGHT;
var h = (ch - padding * GRID_WIDTH) / GRID_WIDTH;   
var colors:any = []
for (var y = 0; y < GRID_WIDTH; y++) {
    for (var x = 0; x < GRID_HEIGHT; x++) {
        colors.push(randomColor());
    }
}


function drawGrid(){
    ctx.clearRect(0,0,cw,ch);
    ctx.save();
    ctx.globalAlpha = 0.25;
    for (var y = 0; y < GRID_WIDTH; y++) {
        for (var x = 0; x < GRID_HEIGHT; x++) {
            ctx.fillStyle = colors[y * GRID_HEIGHT + x];
            ctx.fillRect(x * (w + padding), y * (h + padding), w, h);
        }
    }
}

function drawCircle(robotPos:number) {
    ctx.globalAlpha = 0.8;
    const xPos = Math.floor(robotPos / GRID_WIDTH);
    const yPos = robotPos % GRID_HEIGHT;
    ctx.beginPath();
    ctx.arc((0.5+xPos) * (w + padding), (0.5+yPos) * (h + padding), 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

//initialisation
drawGrid(); 
drawCircle(userRobot.position);
const scoreTag = document.getElementById('score');
const chargeCount = document.getElementById('charge');
window.addEventListener("keydown", (event:KeyboardEvent) => {
    //for now keep as 5x5, once working - expand to provide arguments for game
    if(userRobot.hasExploded) return;
    handleMoveRobot(userRobot,event.key, {width: GRID_WIDTH, height:GRID_HEIGHT});
    updateGrid(userRobot.position, grid);
    drawGrid();
    drawCircle(userRobot.position); //update new position
    if(scoreTag) {
        scoreTag.innerHTML = "Score: " + userRobot.score.toString();
    }
    if(chargeCount) {
        chargeCount.innerHTML = "Charge: " + userRobot.charge.toString();
    }
    console.log(`Robot charge ${userRobot.charge}`);
    explodeRobot(userRobot);
}, true);
