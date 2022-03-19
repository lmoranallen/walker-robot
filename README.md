# walker-robot

TypeScript implementation of a robot traversing a grid.

## Process
There are a select amount of core aspects that need to be
considered when approaching this problem. I find that the
following approach makes the most sense:

- Producing the grid the robot will traverse

- Focusing on the structure of the main elements (i.e: the robot)

- Progressing onto the basic functionality of the robot (i.e: movement)

- Combining all of this to successfully implement a "single turn" or "successful move"

- Handling event-specific cases and edge cases:
	* Returning to the start space to refuel
	* Reaching an end of a grid where a move is not valid

- Handling end-game conditions: 
	* Robot fuel reaches zero
	* Storing data [TBA] 
	* Shows a user's score at the end



### Objective 

- Stage 1:  Produce an MVP that allows the user to just play the game
- Don't worry about styling at the moment, just get the game working in ASCII for now.

