export type Robot = {
    position: number, 
    charge: number,
    maxCharge: number
    name?: string,
}


/**
 * A typical move for a robot would be as follows: 
 *  - Robot starts at a position
 *  - A key is pressed
 *  - Robot moves by one block - charge is then decremented by one
 *  - If the robot is not back at the start and charge is zero, explode the robot
 *  - If the robot is at the start, recharge the robot back to maximum
 *  */ 

export function handleMoveRobot(robot: Robot, eventKey: string) {
    // event.preventDefault();
    switch (eventKey) {
        case "ArrowDown":
            console.log('Down key pressed');
            break;
        case "ArrowUp":
            console.log('Up key pressed');
            break;
        case "ArrowLeft":
            console.log('Left key pressed');
            break;
        case "ArrowRight":
            console.log('Right key pressed');
            break;
        default:
            return;
    }
    // event.preventDefault();
}

//
export function explodeRobot(charge: number, position: number) {
    if(charge === 0 && position !== 0){
        //end game if true...
    };
}
