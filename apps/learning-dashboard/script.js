// @ts-check

/**
 * @typedef {"Learn" | "Build" | "Verify" | "Ship" | "Reflect"} TaskCategory
 * @typedef {"Done" | "In progress" | "Todo"} TaskStatus
 *
 * @typedef {Object} LearningTask
 * @property {string} title
 * @property {TaskCategory} category
 * @property {TaskStatus} status
 * @property {string} notes
 */

/** @type {TaskStatus[]} */
const validStatuses = ["Done", "In progress", "Todo"];

const categoryLabels = {
  learn: "Learn",
  build: "Build",
  verify: "Verify",
  ship: "Ship",
  reflect: "Reflect",
};

const maxTitleLength = 80;
const maxNotesLength = 200;

/** @type {LearningTask[]} */
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

const taskFormElement = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskCategoryInput = document.querySelector("#task-category");
const taskNotesInput = document.querySelector("#task-notes");
const taskListElement = document.querySelector("#task-list");
const formErrorElement = document.querySelector("#form-error");

if (
  !(taskFormElement instanceof HTMLFormElement) ||
  !(taskTitleInput instanceof HTMLInputElement) ||
  !(taskCategoryInput instanceof HTMLSelectElement) ||
  !(taskNotesInput instanceof HTMLTextAreaElement) ||
  !(taskListElement instanceof HTMLElement) ||
  !(formErrorElement instanceof HTMLElement)
) {
  throw new Error("Required dashboard elements are missing.");
}

/**
 * @param {string} value
 * @returns {TaskCategory | ""}
 */
function getCategoryLabel(value) {
  return categoryLabels[value] || "";
}

/**
 * @param {LearningTask} task
 * @returns {boolean}
 */
function isValidTask(task) {
  return Boolean(
    task.title.trim() &&
      task.category.trim() &&
      validStatuses.includes(task.status) &&
      task.title.length <= maxTitleLength &&
      task.notes.length <= maxNotesLength,
  );
}

/**
 * @param {LearningTask} task
 * @returns {string}
 */
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

/**
 * @param {string} label
 * @param {string} value
 * @returns {HTMLParagraphElement}
 */
function createMetaLine(label, value) {
  const line = document.createElement("p");
  const strong = document.createElement("strong");

  strong.textContent = `${label}: `;
  line.appendChild(strong);
  line.append(value);

  return line;
}

/**
 * @param {LearningTask} task
 * @returns {HTMLElement}
 */
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

/**
 * @param {LearningTask[]} tasks
 * @returns {void}
 */
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

  /** @type {LearningTask} */
  const newTask = {
    title: taskTitleInput.value.trim(),
    category: getCategoryLabel(taskCategoryInput.value),
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

/**
 * @returns {void}
 */
function runValidationChecks() {
  /** @type {LearningTask[]} */
  const testTasks = [
    {
      title: "Valid task",
      category: "Learn",
      status: "Todo",
      notes: "This task should pass validation.",
    },
    {
      title: "",
      category: "Build",
      status: "Todo",
      notes: "Missing title should fail.",
    },
    {
      title: "Missing category",
      category: "",
      status: "Todo",
      notes: "Missing category should fail.",
    },
    {
      title: "Invalid status",
      category: "Verify",
      status: "Blocked",
      notes: "Invalid status should fail.",
    },
  ];

  console.info("Running task validation checks...");

  testTasks.forEach((task) => {
    console.info({
      title: task.title || "Missing title",
      isValid: isValidTask(task),
      message: getValidationMessage(task),
    });
  });
}

runValidationChecks();

renderTasks(learningTasks);