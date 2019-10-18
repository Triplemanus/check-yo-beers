/// ---------------------Quey Selectors ----------------------------------//
var createTaskList = document.querySelector(".add-task-card");
var taskList = document.querySelector("task-list");
var inputCardTitle = document.querySelector("#input-beer-title");


//---------------------Event Listeners-------------------------------------//
window.addEventListener("load", setup(), true);
createTaskList.addEventListener("submit", addTaskCard);
inputCardTitle.addEventListener('keyup', checkCardInputs);

let taskCardArray = [];
let taskItemArray = [];



//----------------------------Functions-----------------------------------//
function addTaskCard(e) {
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

function createTaskCard(taskList, index) {
  console.log(taskList);
  var taskItems = addTaskItems2Card(taskList, index);
sectionRight.innerHTML = `
<aside class="card" data-cardIdentifier="${taskList.id}">
<p class="card-title-text">${taskList.title}</p>
  <div class="card-body">
    <p class="task-list">
      
    </p><p>${taskItems}</p>
 </div>
 <div class="card-footer">
    <div class="card-footer-btn-container">
      <img class="urgent-flash-btn" src="${taskList.urgent ? 'assets/urgent-active.svg' : 'assets/urgent.svg'}" alt="filter by urgent task">
      <p class="card-footer-text">URGENT</p>
    </div>
    <div class="card-footer-btn-container">
      <img class="delete-card-btn" src="assets/delete.svg" alt="delete task card">
      <p class="card-footer-text">DELETE</p>
    </div>
  </div>
</aside>
 `  + sectionRight.innerHTML;
}

function checkItemLists () {
  var titleInput = inputCardTitle.value;
  var taskItems = document.querySelector('.list-entry');
  if (taskItems === null) {

    clearListItems.disabled = true;
    clearListItems.style.background='lightgrey';
  } else {
    clearListItems.disabled = false;
    clearListItems.style.background='#1F1F3D';
}
}

function addTaskItem(e) {
  e.preventDefault();
  const taskItem = (document.querySelector('[name=task-item]')).value;
  const item = {
    content: taskItem, 
    done: false
  };
  taskItemArray.push(item);
  document.querySelector('[name=task-item]').value = '';
  createTaskItemList(item);
  checkItemLists();
}


function addTaskItemsToCard(items2Add, index){
  var idCntr = 0;
  var taskListHTML = items2Add.tasks.map((tasks, i) => {
    idCntr++;
    index = items2Add.id + idCntr.toString();
    return `
   <div class="list-item" data-index=${index}li id=${index}li>
     <img class="checkbox-img" src="assets/checkbox.svg" data-index=${index}img  id="${index}img" alt="card checkbox">
     <input type="checkbox"  class="hidden task-checkbox" data-index=${index}cbx  id="${index}cbx"${items2Add.tasks.done ? 'chcecked' : ''} 
     <label for="">${items2Add.tasks[idCntr - 1].content}</label>
   </div>
   `;
  }).join('');
  return taskListHTML;
}

function checkCardInputs () {
  var titleInput = inputCardTitle.value;
  var taskItems = document.querySelector('.list-entry');
  if (titleInput === "" ||  taskItems === null) {
    makeCardButton.disabled = true;
    makeCardButton.style.background='lightgrey';
  } else {
    makeCardButton.disabled = false;
    makeCardButton.style.background='#1F1F3D';
  }
}

function setup() {
  checkCardInputs();
  checkItemLists();
  if(localStorage.getItem('cardArray')){
    var getTaskArray = localStorage.getItem('cardArray');
    var currentTaskInfo = JSON.parse(getTaskArray);
    currentTaskInfo.forEach(function(toDoList){
    createTaskCard(toDoList);  
    toDoList = new ToDoList(toDoList.id, toDoList.title, toDoList.false, toDoList.tasks);
    taskCardArray[taskArrayIdx] = toDoList;
    taskArrayIdx++;
    });
  }
}