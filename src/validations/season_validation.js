import Joi from "joi";

export const SeasonValidationSchema = {
  create: {
    body: Joi.object().keys({
      series_id: Joi.string().required(),  
      name: Joi.string().required(),
      description: Joi.string().optional()
    }),
  },
  update: {
    body: Joi.object().keys({
      series_id: Joi.string().required(),  
      name: Joi.string().required(),
      description: Joi.string().optional()
    }),
  },
};
