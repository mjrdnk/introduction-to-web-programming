// This doesn't implement input sanitization to show something during the workshop if we have time

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

    // Create checkbox container with todo text ('checkbox-container')
    const checkboxContainerEl = document.createElement("label");
    checkboxContainerEl.className = "checkbox-container";

    // Create checkbox
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";

    // Create name
    const todoNameEl = document.createElement("span");
    todoNameEl.className = "list-item-name";
    todoNameEl.innerHTML = todo;

    // When checkboxEl is created,
    // We can listen on container click events
    // And depend on checkboxEl.checked value for toggling
    checkboxContainerEl.addEventListener("click", () => {
      toggleDone(checkboxEl.checked, todoEl);
    });

    // Build up checkbox container
    // We will attach it to the DOM after all elements are created
    checkboxContainerEl.appendChild(checkboxEl);
    checkboxContainerEl.appendChild(todoNameEl);

    // Create delete action icon
    const deleteActionEl = document.createElement("img");
    deleteActionEl.className = "action";
    deleteActionEl.src = "./assets/icon_delete.svg";
    deleteActionEl.alt = "Action - delete todo";
    deleteActionEl.addEventListener("click", () => deleteTodo(todoEl));

    // Build up the element
    todoEl.appendChild(checkboxContainerEl);
    todoEl.appendChild(deleteActionEl);

    return todoEl;
  }

  function deleteTodo(todoEl) {
    todoListEl.removeChild(todoEl);
  }

  function toggleDone(isDone, todoEl) {
    if (isDone) {
      todoEl.classList.add("done");
    } else {
      todoEl.classList.remove("done");
    }
  }
})();
