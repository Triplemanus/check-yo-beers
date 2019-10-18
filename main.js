/// ---------------------Quey Selectors ----------------------------------//
var createTaskList = document.querySelector(".add-task-card");
var taskList = document.querySelector("task-list");


//---------------------Event Listeners-------------------------------------//
window.addEventListener("load", setup(), true);
createTaskList.addEventListener("submit", addTaskCard);

let taskCardArray = [];
let taskItemArray = [];



//----------------------------Functions-----------------------------------//
addTaskCard(e) {
e.preventDefault();
const taskTitle = (this.querySelector([name=task-title])).value;
var cardId = Date.now();
var indexCntr;
toDoList = new ToDoList(cardId, taskTitle, false, taskItemArray)
taskCardArray[taskArrayidx] = toDoList;
this.reset();
createTaskCard(toDoList, indexCntr);
addTaskItemsToCard(toDoList, indexCntr);
}

function createTaskCard() {

}

function addTaskItem(e) {

}

function addTaskItemsToCard() {

}