const input = document.querySelector(".shopping_form__input");
const button = document.querySelector(".shopping_form__button");
const bodyList = document.querySelector(".shopping_body__list");
const listForm = document.querySelector(".shopping_form__form");

// function handleDeleteList(event) {
// //   const li = event.target.parentElement.parentElement;
// //   li.remove();

function handleChangeValue(event) {
  event.preventDefault();
  const newList = input.value;
  if (newList === "") {
    input.focus();
    return;
  }
  input.value = "";
  const list = createItem(newList);
  bodyList.appendChild(list);
  list.scrollIntoView({ block: "center" });
  input.focus();
}
let id = 0;
function createItem(newList) {
  const list = document.createElement("li");
  list.setAttribute("class", "shopping_body__row");
  list.setAttribute(`data-id`, id);
  list.innerHTML = `<span>${newList}</span><button ><i class="far fa-trash-alt fa-lg" data-id=${id}></i></button>`;
  id++;
  return list;
  // const span = document.createElement("span");
  // span.innerText = newList;
  // const button = document.createElement("button");
  // button.addEventListener("click", () => {
  //   bodyList.removeChild(list);
  // });
  // button.innerHTML = `<i class="far fa-trash-alt fa-lg"></i>`;

  // list.appendChild(span);
  // list.appendChild(button);
}

listForm.addEventListener("submit", handleChangeValue);
button.addEventListener("click", handleChangeValue);

bodyList.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(
      `.shopping_body__row[data-id="${id}"]`
    );
    toBeDeleted.remove();
  }
});
