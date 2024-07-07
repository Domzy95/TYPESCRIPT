// import { v4 as uuidv4 } from "uuid";
// console.log(uuidv4());

import { v4 as uuidv4 } from "uuid";
//!ta task vnesem v spodnjo funckijo addlistitem
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

const list = document.querySelector<HTMLUListElement>("#list");
const from = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");
const task: Task[] = [];
//!če je prazen okenček brez form elemnta napiše please add task
from?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input?.value === "" || input?.value == null) {
    alert("Please add a task");
    return;
  }
  const newTask: Task = {
    id: uuidv4(),
    title: input.value,
    completed: true, //!checkbox.checked nastimamo na true ali false je obklukan okenček ali pa ne
    createdAt: Date.now(),
  };
  task.push(newTask);
  // task.push(task);
  addListItem(newTask);
  input.value = "";
});
//!install npm i uuid če typescript neprepozna types

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}
