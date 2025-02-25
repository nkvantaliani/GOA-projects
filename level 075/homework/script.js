document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    if (taskText === '') return;

    var taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });
    taskItem.appendChild(deleteBtn);

    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', function() {
        var editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = taskText;

        var saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', function() {
            taskItem.textContent = editInput.value;
            taskItem.appendChild(deleteBtn);
            taskItem.appendChild(editBtn);
        });

        taskItem.textContent = '';
        taskItem.appendChild(editInput);
        taskItem.appendChild(saveBtn);
    });
    taskItem.appendChild(editBtn);

    document.getElementById('taskList').appendChild(taskItem);
    taskInput.value = '';
});

document.getElementById('clearAll').addEventListener('click', function() {
    document.getElementById('taskList').innerHTML = '';
});