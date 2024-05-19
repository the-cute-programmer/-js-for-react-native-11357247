const { formatArrayStrings, processArray } = require('./arrayManipulation');

function createUserProfiles(name, modifiedName){
    let userProfiles = [];
    for (let i = 0; i < name.length; i++) {
        const originalName = name[i];
        const modifiedNames = modifiedName[i];
        const id = i + 1;
    
        userProfiles.push({ originalName, modifiedName, id });
      }
    
      return userProfiles;
    
}
let inputNames =["Dede", "Karren", "Hillary", "Sefa", "John", "Lorraine"];
let results = processArray(output)
let formattedStrings = formatArrayStrings(inputNames, results);
let createProfile = createUserProfiles(inputNames, formattedStrings);

console.log(createProfile);
