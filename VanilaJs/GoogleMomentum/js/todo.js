const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input ");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleDeleteList(event) {
  const li = event.target.parentElement;
  li.remove();

  const deletedId = parseInt(li.id);
  toDos = toDos.filter((toDo) => toDo.id !== deletedId);
  saveTodos();
}

function paintTodo(newTodoObj) {
  const list = document.createElement("li");
  list.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.addEventListener("click", handleDeleteList);
  button.innerText = "❌";
  button.id = "delete";
  list.appendChild(span);
  list.appendChild(button);
  toDoList.appendChild(list);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodoList = localStorage.getItem(TODOS_KEY);

if (savedTodoList) {
  const parseTodos = JSON.parse(savedTodoList);
  toDos = parseTodos;
  parseTodos.forEach((todo) => paintTodo(todo));
}
