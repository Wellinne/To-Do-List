const input = document.querySelector(".input");
const buttonP1 = document.querySelector(".buttons-priority-p1");
const buttonP2 = document.querySelector(".buttons-priority-p2");
const buttonP3 = document.querySelector(".buttons-priority-p3");

const tasksContainer = document.querySelector(".tasks-container");

const dateToday = new Date();
const day = dateToday.getDate();
const month = dateToday.getMonth();
const year = dateToday.getFullYear();
const nowData = `${day}/${month}/${year}`;

const validateInput = () => input.value.trim().length > 0;

const handleAddTask = (P1, P2, P3) =>{
  const inputValidate = validateInput();

  if(!inputValidate){
    return input.classList.add("error");
  }

  const addTaskContainer = document.createElement('div');
  addTaskContainer.classList.add('task-item');

  const taskText = document.createElement('p');
  taskText.innerText = input.value;

  const taskDate = document.createElement('p');
  taskDate.innerText = nowData;

  taskText.addEventListener("click", () => handleClick(taskText));

  const deleteTask = document.createElement("i");
  deleteTask.classList.add("far");
  deleteTask.classList.add("fa-trash-alt");

  const priorityTask = document.createElement('p');

  if(P1 == true){
    priorityTask.innerText = "P1";
    console.log("aqui");
  } if (P2 == true) {
    priorityTask.innerText = "P2";
  } if (P3 == true) {
    priorityTask.innerText = "P3";
  }

  addTaskContainer.appendChild(priorityTask);
  addTaskContainer.appendChild(taskText);
  addTaskContainer.appendChild(taskDate);
  addTaskContainer.appendChild(deleteTask);

  tasksContainer.appendChild(addTaskContainer);

  input.value = "";
  P1 = false;
  P2 = false;
  P3 = false;
}

const handleInputChange = () => {
  const inputValidate = validateInput();

  if(inputValidate){
    return input.classList.remove("error");
  }
}

buttonP1.addEventListener("click", () => handleAddTask(true, false, false));
buttonP2.addEventListener("click", () => handleAddTask(false, true, false));
buttonP3.addEventListener("click", () => handleAddTask(false, false, true));

input.addEventListener("change", () => handleInputChange());