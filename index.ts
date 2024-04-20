
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright("\n\t<<<<< Wellcome The CodeWithFaiz Currency-Convertor >>>>>\n"))

let exchange_rate:any={
    "USD":1,
    "UAE":0.9,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":280
}

let user_answer=await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Enter The Currency To Convert From:",
        choices:["USD","UAE","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Enter The Currency To Convert Into:",
        choices:["USD","UAE","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter The Amount To Convert:",
    }
])

let from_amount=exchange_rate[user_answer.from_currency]
let to_amount=exchange_rate[user_answer.to_currency]
let amount=user_answer.amount

// formula
let base_amount=amount/from_amount
let converted_amount=base_amount*to_amount

console.log(chalk.green.bold(`\nThe Converted Amount Is = ${converted_amount.toFixed(2)}\n`))

console.log("Thank You")