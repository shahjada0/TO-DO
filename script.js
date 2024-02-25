let todoList = [];

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    todoList.push(taskText);
    taskInput.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  todoList.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const todoListContainer = document.getElementById("todo-list");
  todoListContainer.innerHTML = "";

  todoList.forEach((task, index) => {
    const row = todoListContainer.insertRow();
    const taskCell = row.insertCell(0);
    const actionCell = row.insertCell(1);

    taskCell.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTask(index);

    actionCell.appendChild(deleteButton);
  });
}

window.onload = function() {
    if (sessionStorage.getItem("todoList")) {
      todoList = JSON.parse(sessionStorage.getItem("todoList"));
      renderTasks();
    }
  };
  
  function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      todoList.push(taskText);
      taskInput.value = "";
      saveTasksToStorage();
      renderTasks();
    }
  }
  
  function deleteTask(index) {
    todoList.splice(index, 1);
    saveTasksToStorage();
    renderTasks();
  }
  
  function saveTasksToStorage() {
    sessionStorage.setItem("todoList", JSON.stringify(todoList));
  }
  
  function renderTasks() {
    const todoListContainer = document.getElementById("todo-list");
    todoListContainer.innerHTML = "";
  
    todoList.forEach((task, index) => {
      const row = todoListContainer.insertRow();
      const taskCell = row.insertCell(0);
      const actionCell = row.insertCell(1);
  
      taskCell.textContent = task;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => deleteTask(index);
  
      actionCell.appendChild(deleteButton);
    });
  }
  