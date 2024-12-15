// JavaScript for Todo Section
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const todoSection = document.getElementById('todo-section');


document.addEventListener('DOMContentLoaded', loadTasks);

addTaskButton.addEventListener('click', function () {
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        createTaskElement(taskValue);

        saveTaskToLocalStorage(taskValue);

        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

function createTaskElement(taskValue) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">Delete</button>
    `;

    todoSection.appendChild(taskItem);

    
    taskItem.querySelector('.delete-btn').addEventListener('click', function () {
        taskItem.remove();
        removeTaskFromLocalStorage(taskValue);
    });
}

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTaskElement);
}

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const email = document.getElementById('email').value.trim();

    // Simple validation
    if (!username || !password || !confirmPassword || !email) {
        alert('Please fill in all required fields!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Sign-Up Successful!');
    form.reset(); 
});
