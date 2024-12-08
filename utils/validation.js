const Joi = require('joi');

const taskValidation = (task) => {
    const schema = Joi.object({
        title: Joi.string().max(100).required(),
        description: Joi.string(),
        status: Joi.string().valid('TODO', 'IN_PROGRESS', 'COMPLETED'),
        priority: Joi.string().valid('LOW', 'MEDIUM', 'HIGH'),
        dueDate: Joi.date()
    });
    return schema.validate(task);
};

module.exports = { taskValidation };
