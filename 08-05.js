function maximumSeating(seats){
    var newSeat = 0;
    // Use seats as queue
    while(seats.length !== 0){
        const curr = seats.shift();
        // If current seat is a 0 check the next two
        if(curr === 0){
            const next = seats.shift();
            const next2 = seats.shift();
            // If next seat does not exist 
            if(next === undefined){
                newSeat += 1;
            }
            // if next seat is taken re add both next seats
            else if(next === 1 ){
                seats.unshift(next2);
                seats.unshift(next);
            }
            // If next seat is empty and second next seat is taken only re add second
            else if (next === 0 && next2 === 1){
                seats.unshift(next2);
            }
            // Can take seat so both next seats are voided, also increase counter
            else{
                newSeat += 1;
            }
        }
        // If seat is taken, next 2 seats can not be taken
        else if (curr === 1){
            seats.shift();
            seats.shift();
        }
    }
    return newSeat;
}
function test(seats, expected){
    const output = maximumSeating(seats);
    console.log(`Expected: ${expected}  Output: ${output}`);
    (output === expected) ? console.log("Test passed") : console.log("Test failed");
}
function main(){
    test([0,0,0,1,0,0,1,0,0,0], 2);
    test([0,0,0,0], 2);
    test([1,0,0,0,0, 1], 0);
    test([0,0,0,1,0,0,1,0, 0,0], 2);
    test([0,0,0,0,0,0,0,0,0,0], 4);
    test([0,0,0,0,0,0,0,0,0,0], 4);
    test([0,1,0,0,1,0,0,1,0,0,0], 1);
    test([0,0,1,0,0,1,0,0,1,0,0,0], 1);
    test([0,0,1,0,0,1,0,0,0,1,0], 0);
    test([0,0,0,1,0,1,0,1,1,0,0,0,0,0, 0], 3);
}

main();