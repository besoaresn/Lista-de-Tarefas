function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
      alert('Digite uma tarefa!');
      return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
      ${taskText}
      <button onclick="removeTask(this)">Remover</button>
  `;

  taskList.appendChild(li);
  input.value = '';
}

function removeTask(button) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(button.parentElement);
}
