function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;
    
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class='delete' onclick='removeTask(this)'>X</button>`;
    taskList.appendChild(li);
    
    input.value = "";
}

function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}