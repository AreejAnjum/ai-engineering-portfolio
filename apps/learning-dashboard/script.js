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
];

const taskListElement = document.querySelector("#task-list");

learningTasks.forEach((task) => {
  const taskCard = document.createElement("article");
  taskCard.className = "task-card";

  taskCard.innerHTML = `
    <h3>${task.title}</h3>
    <p><strong>Category:</strong> ${task.category}</p>
    <p><strong>Status:</strong> ${task.status}</p>
  `;

  taskListElement.appendChild(taskCard);
});