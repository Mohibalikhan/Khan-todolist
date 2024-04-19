import inquirer from "inquirer";
let todos = []; // THIS IS CALLED SHOPPER
let condition = true;

while(condition)
{

    let addtask = await inquirer.prompt(
    [
        {
            name: 'FirstQuestion',
            type:'input',
            message:"What you want to add in your Todos?"

        },
        {
            name:'SecondQuestion',
            type:'confirm',
            message:"Do you want to add more ?",
            default:"False"
        }
    ]
);

    todos.push(addtask.FirstQuestion);
    console.log(todos)
    condition =addtask.SecondQuestion
    //console.log(todos)

}
//HOME WORK
//READ ,UPDATE,DELETE ,ADD