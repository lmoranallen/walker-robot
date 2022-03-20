# walker-robot

TypeScript implementation of a robot traversing an N x N grid.


## Setup
Install modules: `npm i`

To start: `npx tsc && src/app.js`

To run gridtests: `npm run grid-test`

To change the settings:
> Go to `src/play.ts`
> The settings at the top can be tweaked

## To Play
- Use the Arrow keys to move the circle around the grid. 
- Returning to the starting square recharges the Robot

## Process
There are a select amount of core aspects that need to be
considered when approaching this problem. I find that the
following approach makes the most sense:

- Producing the grid the robot will traverse

- Focusing on the structure of the main elements (i.e: the robot)

- Progressing onto the basic functionality of the robot (i.e: movement)

- Combining all of this to successfully implement a "single turn" or "successful move":
	- A key part of this step involves handling the traversal of the grid

- Handling event-specific cases and edge cases:
	* Returning to the start space to refuel
	* Reaching an end of a grid where a move is not valid

- Handling end-game conditions: 
	* Robot fuel reaches zero
	* Shows a user's score at the end

- Providing a visual interface that makes showcasing the following demo easier for testing & future discussion.



### Objective 

- Stage 1:  Produce an MVP that allows the user to just play the game
- Don't worry about styling at the moment, just get the game working in the console for now

- Stage 2: Expand to utilise some visuals (i.e: CSS styling/Canvas)

### Future Work and Expansions
A list of ways to extend the task if more time was available:
- Expand the grid to work with irregular grid dimensions
- Collate a DB to store high scores, statistics & a snapshot of the board's final move
- Expand on the Robot type & produce Robots with variable charge, speed of movement,etc...
- AI that optimally traverses the board


