export type Robot = {
    position: number, 
    charge: number,
    maxCharge: number
    name?: string,
    hasExploded: boolean,
}

export type Move = 'Up' | 'Down' | 'Left' | 'Right';


/**
 * A typical move for a robot would be as follows: 
 *  - Robot starts at a position
 *  - A key is pressed
 *  - Robot moves by one block - charge is then decremented by one
 *  - If the robot is not back at the start and charge is zero, explode the robot
 *  - If the robot is at the start, recharge the robot back to maximum
 *  */ 

export function handleMoveRobot(robot: Robot, eventKey: string, grid: {width: number, height: number}) {
    // event.preventDefault();
    if(robot.hasExploded) return;
    switch (eventKey) {
        case "ArrowDown":
            console.log('Down key pressed');
            if(isValidMove(robot, 'Down', {width: grid.width, height:grid.height})) {
                robot.position -= grid.width;
                console.log('Moved down');
                console.log(`Robot position: ${robot.position}`);
                robot.charge--;
            }
            break;
        case "ArrowUp":
            console.log('Up key pressed');
            if(isValidMove(robot, 'Up', {width: grid.width, height:grid.height})) {
                robot.position += grid.width;
                console.log('Moved up');
                console.log(`Robot position: ${robot.position}`);
                robot.charge--;
            }
            break;
        case "ArrowLeft":
            console.log('Left key pressed');
            if(isValidMove(robot, 'Left', {width: grid.width, height:grid.height})) {
                robot.position -= 1;
                console.log('Moved left');
                console.log(`Robot position: ${robot.position}`);
                robot.charge--;
            }
            break;
        case "ArrowRight":
            console.log('Right key pressed');
            if(isValidMove(robot, 'Right', {width: grid.width, height:grid.height})) {
                robot.position += 1;
                console.log('Moved right');
                console.log(`Robot position: ${robot.position}`);
                robot.charge--;
            }
            break;
        default:
            return;
    }
    // event.preventDefault();
}

export function isValidMove(robot: Robot, move: Move, grid: {width: number, height: number}  ) {
    switch (move) {
        case "Down":
            return robot.position >= grid.width;
        case "Up":
            return robot.position <= (grid.width*(grid.height-1) - 1);
        case "Left":
            return robot.position % grid.width !== 0;
        case "Right":
            return robot.position % grid.width !== grid.width-1;
        default:
            return;
    }
}

function chargeRobot(robot: Robot) {
    console.log('Robot recharged');
    robot.charge = robot.maxCharge;
}

//delete the robot if it has already ran out of charge
export function explodeRobot(robot: Robot) {
    if(robot && robot.charge === 0 && robot.position !== 0){
        robot.hasExploded = true;
        console.log('ROBOT HAS EXPLODED');
    } else if (robot.position === 0) {
        chargeRobot(robot);
    }
}
