class ToDoList {
  constructor(id, title, urgent, tasks) {
    this.id,
    this.title,
    this.urgent = urgent || false,
    this.tasks = tasks || []
  }

  saveToStorage(taskList) {
    var stringifiedContact = JSON.stringify(taskList);
    localStorage.setItem('cardArray', stringifiedContact);
  }
}