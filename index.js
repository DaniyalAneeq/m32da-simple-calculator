#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponension"],
    },
]);
if (answer.operator === "Addition") {
    let a = answer.firstNumber + answer.secondNumber;
    console.log("Your value is : " + a);
}
else if (answer.operator === "Subtraction") {
    let b = answer.firstNumber - answer.secondNumber;
    console.log("Your value is : " + b);
}
else if (answer.operator === "Multiplication") {
    let c = answer.firstNumber * answer.secondNumber;
    console.log("Your value is : " + c);
}
else if (answer.operator === "Division") {
    let d = answer.firstNumber / answer.secondNumber;
    console.log("Your value is : " + d);
}
else if (answer.operator === "Modulus") {
    let e = answer.firstNumber % answer.secondNumber;
    console.log("Your value is : " + e);
}
else if (answer.operator === "Exponension") {
    let f = answer.firstNumber ** answer.secondNumber;
    console.log("Your value is : " + f);
}
else {
    console.log("Please select a valid operator");
}
