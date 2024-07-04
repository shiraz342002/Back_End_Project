import Joi from "joi";

export const SeriesValidationSchema = {
  create: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().optional(),
      trailer_id: Joi.string().required(),
      thumbnail_id: Joi.string().required()
    }),
  },
  update: {
    body: Joi.object().keys({
      name: Joi.string().optional(),
      description: Joi.string().optional(),
      trailer_id: Joi.string().optional(),
      thumbnail_id: Joi.string().optional()
    }),
  },
};
