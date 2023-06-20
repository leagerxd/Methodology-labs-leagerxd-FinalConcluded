'use strict';

const fs = require('fs');
const moment = require('moment');

const TASKS_FILE = 'tasks.json';

// Зчитати список завдань з файлу
function readTasks() {
  try {
    const tasksData = fs.readFileSync(TASKS_FILE);
    return JSON.parse(tasksData);
  } catch (error) {
    return [];
  }
}

// Записати список завдань до файлу
function writeTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Показати список усіх невиконаних завдань
function showIncompleteTasks() {
  const tasks = readTasks();
  const incompleteTasks = tasks.filter(task => !task.completed);

  if (incompleteTasks.length === 0) {
    console.log('Немає невиконаних завдань.');
  } else {
    console.log('Невиконані завдання:');
    incompleteTasks.forEach(task => {
      console.log(`- ${task.title} (дедлайн: ${task.deadline})`);
    });
  }
}

// Показати список всіх завдань
function showAllTasks() {
  const tasks = readTasks();

  if (tasks.length === 0) {
    console.log('Список завдань порожній.');
  } else {
    console.log('Завдання:');
    tasks.forEach(task => {
      const status = task.completed ? 'виконано' : 'не виконано';
      const completionDate = task.completed ? `, виконано ${task.completionDate}` : '';
      console.log(`- ${task.title} (дедлайн: ${task.deadline}, статус: ${status}${completionDate})`);
    });
  }
}

// Позначити завдання виконаним
function markTaskAsCompleted(taskTitle) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(task => task.title === taskTitle);

  if (taskIndex === -1) {
    console.log(`Завдання з назвою "${taskTitle}" не знайдено.`);
    return;
  }

  tasks[taskIndex].completed = true;
  tasks[taskIndex].completionDate = moment().format('YYYY-MM-DD');

  writeTasks(tasks);
  console.log(`Завдання "${taskTitle}" позначено як виконане.`);
}

// Додати завдання
function addTask(title, details, deadline) {
  const tasks = readTasks();
  const newTask = {
    title,
    details,
    deadline,
    completed: false
  };

  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Додано нове завдання: ${title}`);
}

// Редагувати завдання
function editTask(taskTitle, newTitle, newDetails, newDeadline) {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(task => task.title === taskTitle);

  if (taskIndex === -1) {
    console.log(`Завдання з назвою "${taskTitle}" не знайдено.`);
    return;
  }

  tasks[taskIndex].title = newTitle;
  tasks[taskIndex].details = newDetails;
  tasks[taskIndex].deadline = newDeadline;

  writeTasks(tasks);
  console.log(`Завдання "${taskTitle}" було змінено.`);
}

// Показати список протермінованих завдань
function showOverdueTasks() {
  const tasks = readTasks();
  const overdueTasks = tasks.filter(task => !task.completed && moment(task.deadline).isBefore(moment()));

  if (overdueTasks.length === 0) {
    console.log('Немає протермінованих завдань.');
  } else {
    console.log('Протерміновані завдання:');
    overdueTasks.forEach(task => {
      console.log(`- ${task.title} (дедлайн: ${task.deadline})`);
    });
  }
}

// Видалити завдання зі списку
function deleteTask(taskTitle) {
  const tasks = readTasks();
  const updatedTasks = tasks.filter(task => task.title !== taskTitle);

  if (updatedTasks.length === tasks.length) {
    console.log(`Завдання з назвою "${taskTitle}" не знайдено.`);
    return;
  }

  writeTasks(updatedTasks);
  console.log(`Завдання "${taskTitle}" було видалено.`);
}

// Обробка команд з командного рядка
function processCommand() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'list-incomplete':
      showIncompleteTasks();
      break;
    case 'list-all':
      showAllTasks();
      break;
    case 'complete':
      const taskTitle = args[1];
      markTaskAsCompleted(taskTitle);
      break;
    case 'add':
      const title = args[1];
      const details = args[2];
      const deadline = args[3];
      addTask(title, details, deadline);
      break;
    case 'edit':
      const taskToEdit = args[1];
      const newTitle = args[2];
      const newDetails = args[3];
      const newDeadline = args[4];
      editTask(taskToEdit, newTitle, newDetails, newDeadline);
      break;
    case 'list-overdue':
      showOverdueTasks();
      break;
    case 'delete':
      const taskToDelete = args[1];
      deleteTask(taskToDelete);
      break;
    default:
      console.log('Невідома команда. Доступні команди: list-incomplete, list-all, complete, add, edit, list-overdue, delete.');
  }
}

module.exports = {
    readTasks,
    writeTasks,
    showIncompleteTasks,
    showAllTasks,
    markTaskAsCompleted,
    addTask,
    editTask,
    showOverdueTasks,
    deleteTask
  };

// Виклик обробки команд
processCommand();
