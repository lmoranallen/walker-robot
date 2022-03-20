import {generateGrid, updateGrid} from './grid.js'

let count = 0; 

try {
    // checks if array is filled

    //Generating Different Grids

    console.log('\n### Generating Grids ###\n');

    //5x5
    const gridRef = generateGrid({dimensions: {width: 5,height: 5}});
    console.log(gridRef);
    if(gridRef.length !== 25){
        throw new Error(`Expected 25, got ${gridRef.length}`);
    }
    count++;

    //3x3
    const threeBythree = generateGrid({dimensions: {width: 3,height: 3}});
    console.log(threeBythree);
    if(threeBythree.length !== 9){
        throw new Error(`Expected 9, got ${threeBythree.length}`);
    }
    count++;

    //8x8
    const eightByeight = generateGrid({dimensions: {width: 8,height: 8}});
    console.log(eightByeight);
    if(eightByeight.length !== 64){
        throw new Error(`Expected 64, got ${eightByeight.length}`);
    }
    count++;

    //5x8
    const irregularGrid = generateGrid({dimensions: {width: 5,height: 8}});
    console.log(irregularGrid);
    if(irregularGrid.length !== 40){
        throw new Error(`Expected 40, got ${irregularGrid.length}`);
    }
    count++;

    console.log('\n### Updating Robot Position Reference on Grid ###\n');

    //Updating Grid References
    updateGrid(5,gridRef);
    let expectedGrid = [
        'O', 'O', 'O', 'O', 'O', 'X',
        'O', 'O', 'O', 'O', 'O', 'O',
        'O', 'O', 'O', 'O', 'O', 'O',
        'O', 'O', 'O', 'O', 'O', 'O',
        'O'];
    if(gridRef.join(',') !== expectedGrid.join(',')) {
        throw new Error(`\nExpected this grid:\n ${expectedGrid}\nBut got:\n ${gridRef}`);
    }
    count++;

    updateGrid(6, gridRef);
    expectedGrid = [
        'O', 'O', 'O', 'O', 'O', 'O',
        'X', 'O', 'O', 'O', 'O', 'O',
        'O', 'O', 'O', 'O', 'O', 'O',
        'O', 'O', 'O', 'O', 'O', 'O',
        'O'];
    if(gridRef.join(',') !== expectedGrid.join(',')) {
        throw new Error(`\nExpected this grid:\n ${expectedGrid}\nBut got:\n ${gridRef}`);
    }
    count++;

    updateGrid(1, gridRef);
    updateGrid(0, gridRef);
    updateGrid(5, gridRef);
    updateGrid(10, gridRef);
    expectedGrid = [
        'O', 'O', 'O', 'O', 'O', 'O',
        'O', 'O', 'O', 'O', 'X', 'O',
        'O', 'O', 'O', 'O', 'O', 'O',
        'O', 'O', 'O', 'O', 'O', 'O',
        'O'];
    if(gridRef.join(',') !== expectedGrid.join(',')) {
        throw new Error(`\nExpected this grid:\n ${expectedGrid}\nBut got:\n ${gridRef}`);
    }
    count++;

    
} catch (err:any) {
    console.log(`Test ${count+1} failed: ${err.message}`);
} finally {
    console.log(`Tests passed: ${count}`);
    if(count === 7) console.log('\x1b[36m%s\x1b[0m', 'All Grid Tests Passed..');
}

//

