let arr = [12, 34, 10, 6, 40];
const length = arr.length;

printArray('Array before deletion -> ', arr, length);

// case - 1 -> element does not exist in the array;
const removedItem = 15;
const msg1 = 'Array after deletion ' + removedItem + ' -> ';
const len1 = deleteElement(arr, length, removedItem)
printArray(msg1 , arr, len1);

// case - 1 -> element exist in the array;
const removedItem2 = 10;
const msg2 = 'Array after deletion ' + removedItem2 + ' -> ';
const len2 = deleteElement(arr, length, removedItem2)
printArray(msg2 , arr, len2);

function deleteElement(arr, length, item) {
    const position = findPositionOfElement(arr, length, item);
    if (position == -1) {
        console.log('Element ' + item + ' not found');
        return length;
    }
    else {
        // to shift element
        for(let i = position; i < length - 1; i++){
            arr[i] = arr[i+1]; 
        }
        return length - 1;
    }
}

function findPositionOfElement(arr, length, item) {
    for(let i = 0; i < length; i ++){
        if(arr[i] == item) {
            return i;
        }
    }
    return -1;
}

function printArray(msg, array, length) {
    console.log(msg);
    for(let i = 0; i < length; i++){
        console.log(array[i]);
    }
}