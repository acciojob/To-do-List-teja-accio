//your code here
document.addEventListener('DOMContentLoaded', () => {
  const newTodoInput = document.getElementById('newTodoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');

  addTodoBtn.addEventListener('click', () => {
    const todoText = newTodoInput.value.trim();

    if (todoText !== '') {
      const todoItem = document.createElement('li');
      todoItem.textContent = todoText;
      todoList.appendChild(todoItem);
      newTodoInput.value = ''; // Clear input after adding todo
    }
  });
});

