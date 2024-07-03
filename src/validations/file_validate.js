import Joi from 'joi';

export const FileValidationSchema = {
  upload: {
    body: Joi.object().keys({
      original_name: Joi.string().required(),
      current_name: Joi.string().required(),
      type: Joi.string().required(),
      path: Joi.string().required(),
      size: Joi.string().required(),
    }),
  },
  update: {
    body: Joi.object().keys({
      original_name: Joi.string(),
      current_name: Joi.string(),
      type: Joi.string(),
      path: Joi.string(),
      size: Joi.string(),
    }),
  },
};
