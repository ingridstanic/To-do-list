export class Task {
    task;
    startTime;
    endTime;
    done;

    constructor(task, startTime, endTime, done) {
        this.task = task;
        this.startTime = startTime;
        this.endTime = endTime;
        this.done = done;
    }
}