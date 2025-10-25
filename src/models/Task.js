export class Task {
    task;
    startTime;
    endTime;

    constructor(task, startTime, endTime) {
        this.task = task;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}