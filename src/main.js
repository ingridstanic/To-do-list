import { Task } from "./models/Task";
import "./style.css";
import { compareNumbers, createHtmlForBreaks, createHtmlForNewTasks } from "./utils";

const myBreaks = [
    new Task("Break", "09:45", "10:00", false),
    new Task("Walk Albus the dumbledog", "12:00", "13:00", false),
    new Task("Eat something", "13:00", "13:15", false)
]

const handleSubmit = (e) => {
    e.preventDefault();

    const task = document.getElementById("toDo").value;
    const startTime = document.getElementById("timeForTaskStart").value;
    const endTime = document.getElementById("timeForTaskEnd").value;

    const theNewTask = new Task(task, startTime, endTime, false);

    newTasks.push(theNewTask);

    localStorage.setItem("task", JSON.stringify(newTasks));

    createHtmlForNewTasks(newTasks);

    taskForm.reset();
}

const handleClick = () => {
    newTasks.sort(compareNumbers);

    localStorage.setItem("task", JSON.stringify(newTasks));

    createHtmlForNewTasks(newTasks);
};

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
createHtmlForNewTasks(newTasks);

const form = document.getElementById("form");
const taskForm = document.getElementById("taskForm");
const sortButton = document.getElementById("sortButton");

form.className = "flex justify-center my-10"
taskForm.className = "flex flex-col justify-center gap-3 w-96 p-8 border-2 border-indigo-500 rounded-xl"

taskForm.addEventListener("submit", handleSubmit);
sortButton.addEventListener("click", handleClick);









