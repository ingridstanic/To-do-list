import { Task } from "./models/Task";

export const createHtmlForBreaks = (breakList) => {
    const breakContainer = document.getElementById("breaks");
    breakContainer.className = "breakContainer flex justify-center gap-10 mt-10 pb-10";

    breakList.forEach((brk) => {
        const container = document.createElement("div");
        const task = document.createElement("h2");
        const startTime = document.createElement("span");
        const to = document.createElement("span");
        const endTime = document.createElement("span");
        const check = document.createElement("input");

        container.className = "breakCard relative text-center w-50 h-45 p-8 border-2 border-indigo-500 rounded-lg";
        task.innerHTML = brk.task;
        task.style.textDecoration = "none";
        startTime.innerHTML = brk.startTime;
        to.innerHTML = " - ";
        endTime.innerHTML = brk.endTime;
        check.type = "checkbox";
        check.checked = brk.done;
        check.className = "absolute top-3 right-3"
        check.addEventListener("change", () => {
            if (check.checked) {
                task.style.textDecoration = "line-through";
                brk.done = true;
            }
            else {
                task.style.textDecoration = "none";
                brk.done = false;
            }
            localStorage.setItem("breaks", JSON.stringify(breakList));
        });

        container.appendChild(check);
        container.appendChild(task);
        container.appendChild(startTime);
        container.appendChild(to);
        container.appendChild(endTime);
        breakContainer.appendChild(container);
    });

}

export const createHtmlForNewTasks = (newTasks) => {
    const taskContainer = document.getElementById("tasks");
    taskContainer.className = "taskContainer flex flex-wrap justify-center gap-10 my-10";

    taskContainer.innerHTML = "";

    newTasks.forEach((todo, i) => {
        const container = document.createElement("div");
        const task = document.createElement("h2");
        const startTime = document.createElement("span");
        const to = document.createElement("span");
        const endTime = document.createElement("span");
        const check = document.createElement("input");
        const deleteButton = document.createElement("button");

        container.className = "taskCard relative text-center w-50 h-55 p-8 border-2 border-indigo-500 rounded-lg";
        task.innerHTML = todo.task;
        startTime.innerHTML = todo.startTime;
        to.innerHTML = " - ";
        endTime.innerHTML = todo.endTime;
        check.type = "checkbox";
        check.checked = todo.done;
        check.className = "absolute top-3 right-3"
        check.addEventListener("change", () => {
            if (check.checked) {
                task.style.textDecoration = "line-through";
                todo.done = true;
            }
            else {
                task.style.textDecoration = "none";
                todo.done = false;
            }
            localStorage.setItem("task", JSON.stringify(newTasks));
        })
        deleteButton.className = "deleteTask absolute bottom-3 left-14.5";
        deleteButton.innerHTML = "Done";
        deleteButton.addEventListener("click", () => {
            const [removedTask] = newTasks.splice(i, 1);
            todo.done = true;


            const doneList = JSON.parse(localStorage.getItem("done") || "[]");

            doneList.push(removedTask);

            localStorage.setItem("task", JSON.stringify(newTasks));
            localStorage.setItem("done", JSON.stringify(doneList));


            createHtmlForNewTasks(newTasks);
        });

        container.appendChild(task);
        container.appendChild(startTime);
        container.appendChild(to);
        container.appendChild(endTime);
        container.appendChild(check);
        container.appendChild(deleteButton);
        taskContainer.appendChild(container);


    });
}

export const compareNumbers = (a, b) => {
    if (a.startTime < b.startTime) {
        return -1;
    }
    if (a.startTime > b.startTime) {
        return 1;
    }
    return 0;
}