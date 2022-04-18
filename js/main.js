let numbers = [1, 8, -4, -12.54, -9.8]

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            continue;
        }
        sum += Math.round(arr[i]);
    }
    return sum;
}

console.log(sum(numbers));

let numbers1 = [-38.005, -4.58, 12, -13]

function positives(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.round(Math.abs(arr[i])))
    }
    return result;
}

console.log(positives(numbers1));