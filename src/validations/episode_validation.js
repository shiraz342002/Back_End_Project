import Joi from "joi";

export const EpisodeValidationSchema = {
  create: {
    body: Joi.object().keys({
      season_id: Joi.string().required(), 
      name: Joi.string().required(),
      description: Joi.string().required(),
      thumbnail_id: Joi.string().required()
    }),
  },
  update: {
    body: Joi.object().keys({
      season_id: Joi.string().optional(),
      name: Joi.string().optional(),
      description: Joi.string().optional(),
      thumbnail_id: Joi.string().optional()
    }),
  },
};
