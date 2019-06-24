(function() {
  const todos = ["Walk the dog", "Go shopping for new Jeans", "Learn web"];
  const inputEl = document.getElementById("todo-input");
  const addBtnEl = document.getElementById("add-btn");
  const todoListEl = document.getElementById("todo-list");
  let newTodo = "";

  // Add functionality to HTML elements
  inputEl.addEventListener("keyup", event => (newTodo = event.target.value));
  addBtnEl.addEventListener("click", () => {
    if (newTodo.length > 0) {
      addTodo(newTodo);
      newTodo = "";
      inputEl.value = "";
    }
  });

  // Add existing todos to the DOM
  todos.forEach(todo => addTodo(todo));

  function addTodo(todo) {
    const todoEl = getTodoItemElement(todo);
    todoListEl.insertBefore(todoEl, todoListEl.firstChild);
  }

  function getTodoItemElement(todo) {
    // Creaate todo item root element ('list-item')
    const todoEl = document.createElement("div");
    todoEl.className = "list-item";

    // Create checkbox with todo text ('checkbox-container')
    const checkboxEl = document.createElement("label");
    checkboxEl.className = "checkbox-container";
    checkboxEl.innerHTML = `
        <input type="checkbox" />
        <span class="list-item-name">${todo}</span>
    `;

    // Create edit action icon
    const editActionEl = document.createElement("img");
    editActionEl.className = "action";
    editActionEl.src = "./assets/icon_edit.svg";
    editActionEl.alt = "Action - edit todo";
    editActionEl.addEventListener("click", () => editTodo(todoEl));

    // Create delete action icon
    const deleteActionEl = document.createElement("img");
    deleteActionEl.className = "action";
    deleteActionEl.src = "./assets/icon_delete.svg";
    deleteActionEl.alt = "Action - delete todo";
    deleteActionEl.addEventListener("click", () => deleteTodo(todoEl));

    // Build up the element
    todoEl.appendChild(checkboxEl);
    todoEl.appendChild(editActionEl);
    todoEl.appendChild(deleteActionEl);

    return todoEl;
  }

  function editTodo(todoEl) {
    console.log("edit me: ", todoEl);
  }

  function deleteTodo(todoEl) {
    todoListEl.removeChild(todoEl);
  }
})();
