const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

router.post('/add-tasks', createTask);
router.get('/get-tasks', getAllTasks);
router.get('/get-task/:id', getTaskById);
router.put('/update-task/:id', updateTask);
router.delete('/delete-task/:id', deleteTask);

module.exports = router;
