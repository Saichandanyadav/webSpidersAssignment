const Task = require('../models/TaskModel');
const { taskValidation } = require('../utils/validation');

const createTask = async (req, res) => {
    const { error } = taskValidation(req.body);
    if (error) return res.status(400).send({ message: 'Validation failed', details: error.details[0].message });

    try {
        const task = new Task({
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        await task.save();
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (err) {
        res.status(500).send({ message: 'Server error', error: err.message });
    }
};

const getAllTasks = async (req, res) => {
    const { status, priority, sort, limit = 10, skip = 0 } = req.query;
    const query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;

    const sortOption = {};
    if (sort) sortOption[sort] = 1;

    try {
        const tasks = await Task.find(query)
            .sort(sortOption)
            .skip(Number(skip))
            .limit(Number(limit));
        res.status(200).json({ message: 'Tasks retrieved successfully', tasks });
    } catch (err) {
        res.status(500).send({ message: 'Server error', error: err.message });
    }
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).send({ message: 'Task not found' });
        res.status(200).json({ message: 'Task retrieved successfully', task });
    } catch (err) {
        res.status(500).send({ message: 'Server error', error: err.message });
    }
};

const updateTask = async (req, res) => {
    const { error } = taskValidation(req.body);
    if (error) return res.status(400).send({ message: 'Validation failed', details: error.details[0].message });

    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate(id, {
            ...req.body,
            updatedAt: new Date()
        }, { new: true });

        if (!task) return res.status(404).send({ message: 'Task not found' });
        res.status(200).json({ message: 'Task updated successfully', task });
    } catch (err) {
        res.status(500).send({ message: 'Server error', error: err.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };
