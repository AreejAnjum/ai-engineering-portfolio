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
const maxTitleLength = 80;
const maxNotesLength = 200;

const taskFormElement = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskCategoryInput = document.querySelector("#task-category");
const taskNotesInput = document.querySelector("#task-notes");
const taskListElement = document.querySelector("#task-list");
const formErrorElement = document.querySelector("#form-error");

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
      validStatuses.includes(task.status) &&
      task.title.length <= maxTitleLength &&
      task.notes.length <= maxNotesLength,
  );
}

function getValidationMessage(task) {
  if (!task.title.trim()) {
    return "Please write a task title.";
  }

  if (!task.category.trim()) {
    return "Please choose a task category.";
  }

  if (task.title.length > maxTitleLength) {
    return `Task title must be ${maxTitleLength} characters or less.`;
  }

  if (task.notes.length > maxNotesLength) {
    return `Notes must be ${maxNotesLength} characters or less.`;
  }

  return "";
}

function createMetaLine(label, value) {
  const line = document.createElement("p");
  const strong = document.createElement("strong");

  strong.textContent = `${label}: `;
  line.appendChild(strong);
  line.append(value);

  return line;
}

function createTaskCard(task) {
  const taskCard = document.createElement("article");
  taskCard.className = "task-card";

  const title = document.createElement("h3");
  title.textContent = task.title;

  const category = createMetaLine("Category", task.category);
  const status = createMetaLine("Status", task.status);

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

  if (validTasks.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-state";
    emptyMessage.textContent = "No valid tasks to show yet.";
    taskListElement.appendChild(emptyMessage);
    return;
  }

  validTasks.forEach((task) => {
    const taskCard = createTaskCard(task);
    taskListElement.appendChild(taskCard);
  });

  console.info(`Rendered ${validTasks.length} valid tasks.`);
}

taskFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = {
    title: taskTitleInput.value.trim(),
    category: categoryLabels[taskCategoryInput.value] || "",
    status: "Todo",
    notes: taskNotesInput.value.trim(),
  };

  const validationMessage = getValidationMessage(newTask);

  if (validationMessage) {
    formErrorElement.textContent = validationMessage;
    taskTitleInput.focus();
    console.warn("Task validation failed:", validationMessage);
    return;
  }

  formErrorElement.textContent = "";
  learningTasks.push(newTask);
  renderTasks(learningTasks);
  taskFormElement.reset();
  taskTitleInput.focus();

  console.info("Task added successfully:", newTask.title);
});

renderTasks(learningTasks);