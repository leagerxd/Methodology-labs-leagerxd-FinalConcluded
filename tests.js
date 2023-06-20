const {
    readTasks,
    writeTasks,
    showIncompleteTasks,
    showAllTasks,
    markTaskAsCompleted,
    addTask,
    editTask,
    showOverdueTasks,
    deleteTask
  } = require('./main.js'); // 
  
  // Тести для функції `readTasks`
  function testReadTasks() {
    const tasks = readTasks();
    console.log(tasks);
  }
  
  // Тести для функції `writeTasks`
  function testWriteTasks() {
    const tasks = [
      { title: 'Task 1', completed: false },
      { title: 'Task 2', completed: true }
    ];
  
    writeTasks(tasks);
  }
  
  // Тести для функції `showIncompleteTasks`
  function testShowIncompleteTasks() {
    showIncompleteTasks();
  }
  
  // Тести для функції `showAllTasks`
  function testShowAllTasks() {
    showAllTasks();
  }
  
  // Тести для функції `markTaskAsCompleted`
  function testMarkTaskAsCompleted() {
    const taskTitle = 'Task 1';
    markTaskAsCompleted(taskTitle);
  }
  
  // Тести для функції `addTask`
  function testAddTask() {
    const title = 'New Task';
    const details = 'Some details about the task';
    const deadline = '2023-06-30';
    addTask(title, details, deadline);
  }
  
  // Тести для функції `editTask`
  function testEditTask() {
    const taskTitle = 'Task 1';
    const newTitle = 'Updated Task';
    const newDetails = 'Updated details';
    const newDeadline = '2023-07-05';
    editTask(taskTitle, newTitle, newDetails, newDeadline);
  }
  
  // Тести для функції `showOverdueTasks`
  function testShowOverdueTasks() {
    showOverdueTasks();
  }
  
  // Тести для функції `deleteTask`
  function testDeleteTask() {
    const taskTitle = 'Task 1';
    deleteTask(taskTitle);
  }
  
  // Виклик тестів
  testReadTasks();
  testWriteTasks();
  testShowIncompleteTasks();
  testShowAllTasks();
  testMarkTaskAsCompleted();
  testAddTask();
  testEditTask();
  testShowOverdueTasks();
  testDeleteTask();
  