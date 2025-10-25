import { Task } from "./models/Task";
import "./style.css";
import { createHtmlForBreaks, createHtmlForNewTasks } from "./utils";

const myBreaks = [
    new Task("Break", "09:45", "10:00"),
    new Task("Walk Albus the dumbledog", "12:00", "13:00"),
    new Task("Eat something", "13:00", "13:15")
]

localStorage.setItem("breaks", JSON.stringify(myBreaks));

const listFromLS = localStorage.getItem("breaks");

const breakList = JSON.parse(listFromLS);

createHtmlForBreaks(breakList);



let newTasks = [];

const tasksFromLs = localStorage.getItem("task");

if (tasksFromLs === null) {
    newTasks = [];
} else {
    newTasks = JSON.parse(tasksFromLs);
}



const handleSubmit = (e) => {
    e.preventDefault();

    const task = document.getElementById("toDo").value;
    const startTime = document.getElementById("timeForTaskStart").value;
    const endTime = document.getElementById("timeForTaskEnd").value;

    const theNewTask = new Task(task, startTime, endTime);

    newTasks.push(theNewTask);

    localStorage.setItem("task", JSON.stringify(newTasks));

    createHtmlForNewTasks(newTasks);
}


const taskForm = document.getElementById("taskForm");

taskForm.addEventListener("submit", handleSubmit);





