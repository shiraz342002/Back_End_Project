import Joi from "joi";

export const GenreSeriesValidationSchema = {
  create: {
    body: Joi.object().keys({
      genre_id: Joi.string().required(),
      series_id: Joi.string().required()
    }),
  },
  update: {
    body: Joi.object().keys({
      genre_id: Joi.string().required(), 
      series_id: Joi.string().required() 
    }),
  },
};
