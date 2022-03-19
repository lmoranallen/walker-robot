import * as grid from './grid'

let count = 0; 

try {
    // checks if array is filled
    const gridRef = grid.generateGrid(5,5);
    console.log(gridRef);
    if(gridRef.length !== 25){
        throw new Error(`Expected 25, got ${gridRef.length}`);
    }
    count++;
    
} catch (err:any) {
    console.log(`Test ${count+1} failed: ${err.message}`);
} finally {
    console.log(`Tests passed: ${count}`);
}

//

