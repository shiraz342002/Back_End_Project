import Joi from "joi";

export const GenreValidationSchema = {
  create: {
    body: Joi.object().keys({
      name: Joi.string().required()
    }),
  },
  update: {
    body: Joi.object().keys({
      name: Joi.string().required()
    }),
  },
};
