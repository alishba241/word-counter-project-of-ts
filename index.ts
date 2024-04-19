#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


const input : {
           word : string 
} = await inquirer.prompt([
    {
        name:"word",
        type: "input",
        message: "Write a sentence or paragraph."
    }
]);

//to remove whitespaces and split words to count 

const count = input.word.trim().split(" ");
console.log(count);
//total word count

console.log(chalk.magentaBright(`Total words are : ${count.length}`));
