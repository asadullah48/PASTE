import inquirer from "inquirer";
const calculate = (num1, num2, operation) => {
    switch (operation) {
        case "addition":
            return num1 + num2;
        case "subtraction":
            return num1 - num2;
        case "Multipication":
            return num1 * num2;
        case "division":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;
        default:
            throw new Error(`Invalid operation: ${operation}`);
    }
};
const runCalculator = async () => {
    try {
        const answers = await inquirer.prompt([
            {
                message: "Enter first number",
                type: "number",
                name: "num1",
            },
            {
                message: "Enter second number",
                type: "number",
                name: "num2",
            },
            {
                message: "Choose an operation",
                type: "list",
                name: "operation",
                choices: ["addition", "subtraction", "Multipication", "division"],
            },
        ]);
        const result = calculate(answers.num1, answers.num2, answers.operation);
        console.log(`The result is: ${result}`);
    }
    catch (error) {
        console.error(error.message);
    }
};
runCalculator();
