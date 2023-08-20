const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({
      text: taskText,
      reminder: false,
    });
    renderTasks();
    taskInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleReminder(index) {
  tasks[index].reminder = !tasks[index].reminder;
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML
