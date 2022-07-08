let arr = [12, 34, 10, 6, 40];
// we are not using const for array, because array will be modified after 
// inserting element

console.log("Array before insertion ");
printArray(arr);

const length = arr.length;
const itemToBeInserted = 78;

arr[length] = itemToBeInserted;

console.log("Array after insertion ");
printArray(arr);

function printArray(array) {
    console.log(array);
}