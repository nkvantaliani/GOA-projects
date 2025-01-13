const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

// Load tasks from localStorage when the page is loaded
window.addEventListener('load', loadTask);

// Add event listeners
addTaskBtn.addEventListener('click', () => {
    // Added check to prevent adding empty or whitespace-only tasks
    if (taskInput.value.trim() !== "") { 
        addTask(taskInput.value.trim());
        taskInput.value = ""; // Clear the input field after adding a task
    }
});

clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    taskList.innerHTML = ""; // Clear the task list on the page
});

// Save tasks to localStorage
function saveTasks() {
    const tasks = [];
    // Simplified to use forEach instead of manual loop
    document.querySelectorAll('#taskList li').forEach((li) => { 
        tasks.push(li.firstChild.textContent.trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a task to the list
function addTask(task) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    
    li.textContent = task;
    btn.textContent = 'Remove';
    btn.addEventListener('click', () => { // Added event listener to remove tasks
        li.remove();
        saveTasks();
    });

    li.appendChild(btn);
    taskList.appendChild(li);
    saveTasks();
}

// Load tasks from localStorage
function loadTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Added null check with default empty array
    tasks.forEach((task) => addTask(task)); // Simplified loop using forEach
}
