function processArray(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            output.push(array[i] ** 2);
        }
        else {
            output.push(array[i] * 3); 
        }
    }
    return output;
}

output = [1, 2, 5, 7, 8, 9, 10, 6];
let results = processArray(output);

console.log(results);
