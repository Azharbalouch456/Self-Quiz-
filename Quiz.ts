import chalk from "chalk"

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const  Quiz = await inquirer.prompt([

{
 message: "which keyword use for print a piece of array without alternate to array ",
type: "list",
name: "Answer1",
choices: ["copywithin", "indexof", "include", "splice" ]

},

{
    message: "which keyword is uesd to add an element at bigning of array?",
    type: "list",
    name: "Answer2",
    choices: ["length", "shift", "push", "unshift" ]

}
  
])

console.log(Quiz);

console.log(chalk.yellow("Quiz Result!"));

if (Quiz.Answer1 === "copywithin"){

    console.log(chalk.red("Question 1: Incorrect!"))

}else if (Quiz.Answer1 === "Indexof"){

    console.log(chalk.red("Question 1: Incorrect!"))

}else if(Quiz.Answer1 === "include"){

    console.log(chalk.red("Question 1: Incorrect!"))

}else if (Quiz.Answer1 === "splice"){

    console.log(chalk.green("Question 1: Correct!"))

}else {

console.log(chalk.gray("pleas select a valid option in question 1!"));
}



if (Quiz.Answer2 === "length"){

    console.log(chalk.red("Question 2: Incorrect!"))

}else if ((Quiz.Answer2 === "shift")){

    console.log(chalk.red("Question 2: Incorrect!"))

}else if (Quiz.Answer2 === "push"){

    console.log(chalk.red("Question 2: Incorrect!"))

}else if (Quiz.Answer2 === "unshift"){

    console.log(chalk.green("Question 2: Correct!"))

}else {

console.log(chalk.gray("pleas select a valid option in question"))
}

