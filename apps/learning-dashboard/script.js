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
 *
 * @typedef {Object} TaskDraft
 * @property {string} title
 * @property {TaskCategory | ""} category
 * @property {TaskStatus} status
 * @property {string} notes
 */

/**
 * Finds an HTML element and checks that it is the correct type.
 *
 * @template {Element} T
 * @param {string} selector
 * @param {{ new (): T }} elementType
 * @returns {T}
 */
function getRequiredElement(selector, elementType) {
  const element = document.querySelector(selector);

  if (!(element instanceof elementType)) {
    throw new Error(`Required element is missing or invalid: ${selector}`);
  }

  return element;
}

/** @type {TaskStatus[]} */
const validStatuses = ["Done", "In progress", "Todo"];

/** @type {Record<string, TaskCategory>} */
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

const taskFormElement = getRequiredElement("#task-form", HTMLFormElement);
const taskTitleInput = getRequiredElement("#task-title", HTMLInputElement);
const taskCategoryInput = getRequiredElement(
  "#task-category",
  HTMLSelectElement,
);
const taskNotesInput = getRequiredElement("#task-notes", HTMLTextAreaElement);
const taskListElement = getRequiredElement("#task-list", HTMLElement);
const formErrorElement = getRequiredElement("#form-error", HTMLElement);

/**
 * @param {string} value
 * @returns {TaskCategory | ""}
 */
function getCategoryLabel(value) {
  return categoryLabels[value] || "";
}

/**
 * @param {TaskDraft} task
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
 * @param {TaskDraft} task
 * @returns {string}
 */
function getValidationMessage(task) {
  if (!task.title.trim()) {
    return "Please write a task title.";
  }

  if (!task.category.trim()) {
    return "Please choose a task category.";
  }

  if (!validStatuses.includes(task.status)) {
    return "Task status is invalid.";
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
 * @returns {TaskDraft}
 */
function getTaskFromForm() {
  return {
    title: taskTitleInput.value.trim(),
    category: getCategoryLabel(taskCategoryInput.value),
    status: "Todo",
    notes: taskNotesInput.value.trim(),
  };
}

/**
 * Converts a draft task into a valid learning task.
 *
 * @param {TaskDraft} task
 * @returns {LearningTask | null}
 */
function toLearningTask(task) {
  const validationMessage = getValidationMessage(task);

  if (validationMessage) {
    return null;
  }

  return {
    title: task.title.trim(),
    category: /** @type {TaskCategory} */ (task.category),
    status: task.status,
    notes: task.notes.trim(),
  };
}

/**
 * @param {string} message
 * @returns {void}
 */

/**
 * @param {boolean} isInvalid
 * @returns {void}
 */
function setFormInvalidState(isInvalid) {
  taskTitleInput.setAttribute("aria-invalid", String(isInvalid));
  taskCategoryInput.setAttribute("aria-invalid", String(isInvalid));
  taskNotesInput.setAttribute("aria-invalid", String(isInvalid));
}

/**
 * @param {LearningTask | TaskDraft} task
 * @returns {void}
 */
function focusFirstInvalidField(task) {
  if (!task.title.trim() || task.title.length > maxTitleLength) {
    taskTitleInput.focus();
    return;
  }

  if (!task.category.trim()) {
    taskCategoryInput.focus();
    return;
  }

  if (task.notes.length > maxNotesLength) {
    taskNotesInput.focus();
    return;
  }

  taskTitleInput.focus();
}

/**
 * @param {string} message
 * @returns {void}
 */
function showFormError(message) {
  setFormInvalidState(true);
  formErrorElement.textContent = message;
}
/**
 * @returns {void}
 */
/**
 * @returns {void}
 */
function clearFormError() {
  setFormInvalidState(false);
  formErrorElement.textContent = "";
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
 * @returns {HTMLParagraphElement}
 */
function createEmptyState() {
  const emptyMessage = document.createElement("p");
  emptyMessage.className = "empty-state";
  emptyMessage.textContent = "No valid tasks to show yet.";

  return emptyMessage;
}

/**
 * @param {LearningTask[]} tasks
 * @returns {void}
 */
function renderTasks(tasks) {
  taskListElement.innerHTML = "";

  const validTasks = tasks.filter(isValidTask);

  if (validTasks.length === 0) {
    taskListElement.appendChild(createEmptyState());
    return;
  }

  validTasks.forEach((task) => {
    taskListElement.appendChild(createTaskCard(task));
  });

  console.info(`Rendered ${validTasks.length} valid tasks.`);
}

/**
 * @param {LearningTask} task
 * @returns {void}
 */
function addTask(task) {
  learningTasks.push(task);
  renderTasks(learningTasks);
}

/**
 * @returns {void}
 */
function resetTaskForm() {
  taskFormElement.reset();
  taskTitleInput.focus();
}

/**
 * @param {Event} event
 * @returns {void}
 */
function handleTaskSubmit(event) {
  event.preventDefault();

  const taskDraft = getTaskFromForm();
  const validationMessage = getValidationMessage(taskDraft);

  if (validationMessage) {
  showFormError(validationMessage);
  focusFirstInvalidField(taskDraft);
  console.warn("Task validation failed:", validationMessage);
  return;
}

  const validTask = toLearningTask(taskDraft);

  if (!validTask) {
    showFormError("Task could not be created.");
    return;
  }

  clearFormError();
  addTask(validTask);
  resetTaskForm();

  console.info("Task added successfully:", validTask.title);
}

/**
 * @returns {void}
 */
function initDashboard() {
  taskFormElement.addEventListener("submit", handleTaskSubmit);
  renderTasks(learningTasks);
  console.info("Learning dashboard initialized.");
}

initDashboard();