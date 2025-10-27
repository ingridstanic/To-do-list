export const createHtmlForBreaks = (breakList) => {
    const breakContainer = document.getElementById("breaks");
    breakContainer.className = "breakContainer";

    breakList.forEach((brk) => {
        const container = document.createElement("div");
        const task = document.createElement("h2");
        const startTime = document.createElement("span");
        const to = document.createElement("span");
        const endTime = document.createElement("span");
        const check = document.createElement("input");

        container.className = "breakCard";
        task.innerHTML = brk.task;
        startTime.innerHTML = brk.startTime;
        to.innerHTML = " - ";
        endTime.innerHTML = brk.endTime;
        check.type = "checkbox";
        check.addEventListener("change", () => {
            if (check.checked) {
                task.style.textDecoration = "line-through";
            }
            else {
                task.style.textDecoration = "none";
            }
        })

        container.appendChild(task);
        container.appendChild(startTime);
        container.appendChild(to);
        container.appendChild(endTime);
        container.appendChild(check);
        breakContainer.appendChild(container);
    });

}

export const createHtmlForNewTasks = (newTasks) => {
    const taskContainer = document.getElementById("tasks");
    taskContainer.className = "taskContainer";

    taskContainer.innerHTML = "";

    newTasks.forEach((todo, i) => {
        const container = document.createElement("div");
        const task = document.createElement("h2");
        const startTime = document.createElement("span");
        const to = document.createElement("span");
        const endTime = document.createElement("span");
        const check = document.createElement("input");
        const deleteButton = document.createElement("button");

        container.className = "taskCard";
        task.innerHTML = todo.task;
        startTime.innerHTML = todo.startTime;
        to.innerHTML = " - ";
        endTime.innerHTML = todo.endTime;
        check.type = "checkbox";
        check.addEventListener("change", () => {
            if (check.checked) {
                task.style.textDecoration = "line-through";
            }
            else {
                task.style.textDecoration = "none";
            }
        })
        deleteButton.className = "deleteTask";
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => {
            newTasks.splice(i, 1);
            localStorage.setItem("task", JSON.stringify(newTasks));
            createHtmlForNewTasks(newTasks);
        });

        container.appendChild(task);
        container.appendChild(startTime);
        container.appendChild(to);
        container.appendChild(endTime);
        container.appendChild(check);
        container.appendChild(deleteButton);
        taskContainer.appendChild(container);


    })
}