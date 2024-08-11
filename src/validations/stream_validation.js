import Joi from "joi";

export const StreamValidationSchema = {
  create: {
    body: Joi.object().keys({
      episode_id: Joi.string().required(),  
      user_id: Joi.string(),     
      time: Joi.string().required()
    }),
  },
  update: {
    body: Joi.object().keys({
      episode_id: Joi.string().required(),  
      user_id: Joi.string(),     
      time: Joi.string().required()
    }),
  },
};
