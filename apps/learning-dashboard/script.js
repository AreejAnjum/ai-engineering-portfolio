const learningTasks = [
  {
    title: "Practice JavaScript variables",
    category: "Learn",
    status: "Done",
    notes: "Learned how variables store values.",
  },
  {
    title: "Render tasks from an array",
    category: "Build",
    status: "In progress",
    notes: "Displayed task cards using JavaScript.",
  },
  {
    title: "Save browser screenshot evidence",
    category: "Verify",
    status: "Todo",
    notes: "Need to save proof in the evidence folder.",
  },
];

const validStatuses = ["Done", "In progress", "Todo"];

const taskFormElement = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskCategoryInput = document.querySelector("#task-category");
const taskNotesInput = document.querySelector("#task-notes");
const taskListElement = document.querySelector("#task-list");

const categoryLabels = {
  learn: "Learn",
  build: "Build",
  verify: "Verify",
  ship: "Ship",
  reflect: "Reflect",
};

function isValidTask(task) {
  return Boolean(
    task.title.trim() &&
      task.category.trim() &&
      validStatuses.includes(task.status),
  );
}

function createTaskCard(task) {
  const taskCard = document.createElement("article");
  taskCard.className = "task-card";

  const title = document.createElement("h3");
  title.textContent = task.title;

  const category = document.createElement("p");
  category.innerHTML = `<strong>Category:</strong> ${task.category}`;

  const status = document.createElement("p");
  status.innerHTML = `<strong>Status:</strong> ${task.status}`;

  taskCard.appendChild(title);
  taskCard.appendChild(category);
  taskCard.appendChild(status);

  if (task.notes) {
    const notes = document.createElement("p");
    notes.textContent = task.notes;
    taskCard.appendChild(notes);
  }

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

taskFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = {
    title: taskTitleInput.value.trim(),
    category: categoryLabels[taskCategoryInput.value] || "",
    status: "Todo",
    notes: taskNotesInput.value.trim(),
  };

  if (!isValidTask(newTask)) {
    taskTitleInput.focus();
    return;
  }

  learningTasks.push(newTask);
  renderTasks(learningTasks);
  taskFormElement.reset();
  taskTitleInput.focus();
});

renderTasks(learningTasks);