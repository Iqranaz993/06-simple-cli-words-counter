#! /usr/bin/env node
//this is the key to push the package with npm account (shibang)
import inquirer from "inquirer";
//import inquirer from node module package
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "inter your sentence to count the words: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
