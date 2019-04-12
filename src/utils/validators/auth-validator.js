const Joi = require('Joi');

module.exports = {
    auth: {
        name: Joi.string().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}/).required()
    },
}