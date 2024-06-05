const todoInput = document.createElement('input');
todoInput.placeholder = 'Enter new task';
document.body.append(todoInput);
todoInput.focus();

const submitButton = document.createElement('button');
submitButton.innerHTML = 'Add Task';
document.body.append(submitButton);
submitButton.style.marginLeft = '4px';

const todoList = document.createElement('ul');
document.body.append(todoList);

const addNewTaskHandler = () => {
	const task = todoInput.value;
  const listElement = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = task;
  listElement.append(taskSpan);
  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  listElement.append(editButton);
  editButton.style.marginLeft = '4px';
  
  editButton.addEventListener('click', (e) => {
  	todoInput.value = listElement.children[0].textContent;
    todoInput.focus();
    todoList.removeChild(listElement);
  })
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  listElement.append(deleteButton);
  deleteButton.style.marginLeft = '4px';
  
  deleteButton.addEventListener('click', () => {
  	todoList.removeChild(listElement);
  });
  
  todoList.append(listElement);
  todoInput.value = '';
  todoInput.focus();
}

submitButton.addEventListener('click', addNewTaskHandler);
