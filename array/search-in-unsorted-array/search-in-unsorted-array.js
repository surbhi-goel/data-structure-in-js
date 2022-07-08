const arr = [12, 34, 10, 6, 40];
const length = arr.length;

console.log('Unsorted array is ', arr);

// case - 1 -> when item is in array
const item = 10; //item to be searched
const position = findNewElement(arr, length, item);
printPosition(item, position)

// case - 2 -> when item is not in the array
const item2 = 15; //item to be searched
const position2 = findNewElement(arr, length, item2);
printPosition(item2, position2)


// function to find the element in array
function findNewElement(arr, length, item) {
    for(let i = 0; i < length; i ++){
        if(arr[i] == item) {
            return i;
        }
    }
    return -1;
}

function printPosition(item, position) {
    if (position == -1) {
        console.log('Element ' + item + ' not found');
    }
    else {
        console.log('Element ' + item + ' found at position ', position);
    }
}