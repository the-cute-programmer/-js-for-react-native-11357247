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

output = [1, 2, 5, 7, 8, 6];
let results = processArray(output);

console.log(results);


function formatArrayStrings(strings, results){ //results stores array of numbers passed to processArray function
    if (strings.length !== results.length){
        throw new Error("The length of this array of strings is not the same as the length of the array of numbers")
    };

    let stringsOutput = [];
    for (i =0; i < strings.length; i++){
        if (results[i] % 2 === 0){
            stringsOutput.push(strings[i].toUpperCase());
        }
        else{
            stringsOutput.push(strings[i].toLowerCase());
        }
    }
    return stringsOutput;
}

let stringsOutput = ["Dede", "Karren", "Hillary", "Sefa", "Matilda", "Lorraine"];
let formattedStrings = formatArrayStrings(stringsOutput, results);

console.log(formattedStrings);

module.exports = { processArray, formatArrayStrings};