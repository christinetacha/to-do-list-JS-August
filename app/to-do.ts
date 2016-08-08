interface IPerson {
  name: string;
  email: string;
}

interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone() {
    this.done = true;
  }
}

class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {
    super(description, priority);
  }
  markDone() {
    this.done = true;
  }
}

class HobbyTask extends Task {
  constructor(public description: string) {
    super(description, "low");
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson) {
    super(description, priority, assignedTo);
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"
}

var thor: IPerson = {
  name: "Son of Odin",
  email: "thor@asgard.com"
}

var loki: IPerson = {
  name: "God of Mischief",
  email: "loki@geocities.com"
}

var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "High", diane));
tasks.push(new HomeTask("Buy chocolate.", "Low", thor));
tasks.push(new HomeTask("Wash the laundry.", "High", loki));
tasks[0].markDone(); // mark the first task as done
console.log(tasks);

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low", loki));

console.log(tasks);
