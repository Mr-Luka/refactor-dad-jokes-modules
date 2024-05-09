// Named export

export // utility function
function randomItemFromArray(arr, not){
    const item = arr[Math.floor(Math.random()*arr.length)];
    // If statement for in case if the textButton repeats right after another one, to stop
    // it from happening
    if (item === not) {
        console.log("aaa we used that one last time, look again")
        return randomItemFromArray(arr, not);
    }
    return item;
}