import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";7

console.log(figlet.textSync("TODO List"))
let todos:string[]=[]
let loop=true;
while(loop){
    let answers:{
        TODO:string,
        addmore:boolean
    } = await inquirer.prompt([{
        name: "TODO",
        type: "input",
        message: "What you want to add in Todo:"},
        {
            name: "addmore",
            type: "confirm",
            message: "Youn want to add more in Todo?"}
    ]);
    let {TODO,addmore}=answers
    loop=addmore;
    if(TODO){
        todos.push(TODO)
    }
    else{
        console.log(chalk.red.bold.italic.underline("Enter Valid Input!"));
    }
}
if(todos.length>0){
    console.log(chalk.blue.bold.italic("Your Todo List Is:"));
    todos.forEach(todos=>{
        console.log(todos)
    })
}
else{
    console.log(chalk.red.italic.underline.bold("No Todo found!"));
}
