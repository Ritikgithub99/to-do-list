document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.addEventListener('click', () => {
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            li.firstChild.textContent = newTaskText;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}
