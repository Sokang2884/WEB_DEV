// Get references to the DOM elements
const newItem = document.getElementById('new-item');
const addItem = document.getElementById('add-item');
const todoList = document.getElementById('todo-list');

// Create a new item
const createItem = (item) => {
  // Create a new list item
  const li = document.createElement('li');
  li.textContent = item;

  // Add a click event listener to the item
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Return the new item
  return li;
};

// Add a new item to the to-do list
const add = () => {
  // Get the value of the new item input
  const item = newItem.value;

  // Create a new item
  const li = createItem(item);

  // Add the new item to the to-do list
  todoList.appendChild(li);

  // Clear the new item input
  newItem.value = '';
};

// Add an event listener to the add item button
addItem.addEventListener('click', add);