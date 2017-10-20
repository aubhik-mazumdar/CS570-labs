
/*
Lab 8 : Heaps used for Sorting
Aubhik Mazumdar 10430935
Ramana Nagasamudram 10430268
Requires the READLINE-SYNC package
*/

const readline = require('readline-sync');

var elements = [];

let insert = function(elem) {
    elements.push(elem);

    let child_idx = elements.length - 1;
    let parent_idx = Math.floor((child_idx-1)/2);

    while (elements[child_idx] > elements[parent_idx]) {
        //console.log("Swapping ", elements[parent_idx], elements[child_idx]);
        swap(parent_idx, child_idx);
        child_idx = parent_idx;
        parent_idx = Math.floor((child_idx-1)/2);
    }
}

let remove_max = function() {
    maxElem = elements[0];
    elements[0] = elements.pop();
    
    // keep swapping parent with largest child if child is greater than parent
    let parent_idx = 0;
    let child_idx = max_child(parent_idx);
    while (elements[child_idx] > elements[parent_idx]) {
        //console.log(elements);
        //console.log("Swapping ", elements[parent_idx], elements[child_idx]);
        swap(parent_idx, child_idx);
        parent_idx = child_idx;
        child_idx = max_child(parent_idx);
    }
    return maxElem;
}

/* max_child : find the index of the largest child node if not undefined */
let max_child = function(idx) {
    let child_idx;
    if (elements.length === 2) {
        return 1;
    }
    else if ((2*idx+1) > elements.length) {
        child_idx = null;
    }
    else if ((2*idx+2) > elements.length && (2*idx+1) <= elements.length) {
        child_idx = 2*idx+1;
    }
    else {
        child_idx = (elements[2*idx+1] >= elements[2*idx+2]) ? (2*idx+1) : (2*idx+2);
    }
    return child_idx;
}

let swap = function(idx, idy) {
    let temp = elements[idx];
    elements[idx] = elements[idy];
    elements[idy] = temp;
}


let count = 0;
while (count++ < 10) {
    let user_input = Number(readline.question("Please enter a number : "));
    insert(user_input);
}

console.log("Your numbers in descending order :- ");

while (--count > 0) {
    console.log(remove_max());
}
