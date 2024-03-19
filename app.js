// Command to create a package.json file is npm init -y

//example of package name lodash is install and shown inside package.json file
const _ = require("lodash");

const item = [1, [2, [3, [4]]]];
const newItem = _.flattenDeep(item);
console.log(newItem);
