const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
  const { error } = Joi.object(schema).validate({
    body: req.body,
    params: req.params,
    query: req.query,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message).join(",");
    next(new ApiError(400, errors));
  }

  return next();
};

module.exports = validate;
