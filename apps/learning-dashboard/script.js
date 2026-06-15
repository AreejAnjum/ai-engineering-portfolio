const learningTasks = [
  {
    title: "Practice JavaScript variables",
    category: "Learn",
    status: "Done",
  },
  {
    title: "Render tasks from an array",
    category: "Build",
    status: "In progress",
  },
  {
    title: "Save browser screenshot evidence",
    category: "Verify",
    status: "Todo",
  },
  {
    title: "",
    category: "Build",
    status: "Blocked",
  },
];

const validStatuses = ["Done", "In progress", "Todo"];
const taskListElement = document.querySelector("#task-list");

function isValidTask(task) {
  return (
    task.title &&
    task.category &&
    validStatuses.includes(task.status)
  );
}

function createTaskCard(task) {
  const taskCard = document.createElement("article");
  taskCard.className = "task-card";

  taskCard.innerHTML = `
    <h3>${task.title}</h3>
    <p><strong>Category:</strong> ${task.category}</p>
    <p><strong>Status:</strong> ${task.status}</p>
  `;

  return taskCard;
}

function renderTasks(tasks) {
  taskListElement.innerHTML = "";

  const validTasks = tasks.filter(isValidTask);

  validTasks.forEach((task) => {
    const taskCard = createTaskCard(task);
    taskListElement.appendChild(taskCard);
  });

  if (validTasks.length !== tasks.length) {
    const warning = document.createElement("p");
    warning.className = "validation-warning";
    warning.textContent = "Some invalid task data was skipped.";
    taskListElement.appendChild(warning);
  }
}

renderTasks(learningTasks);