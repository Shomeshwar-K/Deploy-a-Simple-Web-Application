let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") return;
  
  let li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();
  
  // Add delete button to li
  li.appendChild(deleteBtn);

  // Add task to the list
  taskList.appendChild(li);
  
  // Clear input field
  taskInput.value = "";
}