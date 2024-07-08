import { GenreSeriesServices } from "../services/index.js";
import { httpResponse } from "../utils/httpResponse.js";
export const GenreSeriesController = {
  getAll: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const sortBy = req.query.sortBy || "createdAt";
      const order = req.query.order || "asc";
      const data = await GenreSeriesServices.getAll(page, limit, sortBy, order);
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await GenreSeriesServices.getById(req.params.id);
      return httpResponse.SUCCESS(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  add: async (req, res) => {
    try {
      const data = await GenreSeriesServices.add(req.body);
      return httpResponse.CREATED(res, data);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err);
    }
  },
  updateFileById: async (req, res) => {
    try {
      const file = await GenreSeriesServices.update(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!file) {
        return httpResponse.NOT_FOUND(res, "File not found");
      }
      return httpResponse.SUCCESS(res, file);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, err.message);
    }
  },
  deleteFileById: async (req, res) => {
    try {
      const file = await GenreSeriesServices.getById(req.params.id);
      if (!file) {
        return httpResponse.NOT_FOUND(res, "File not found");
      }
      const deletedFile = await GenreSeriesServices.delete(req.params.id);
      if (!deletedFile) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, "Failed to delete file");
      }
      return httpResponse.SUCCESS(res, deletedFile);
    } catch (err) {
      return httpResponse.INTERNAL_SERVER_ERROR(
        res,
        err.message || "Internal server error"
      );
    }
  },
};
