import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthor,
  UpdateAuthor,
} from "../controller/author.controller";
import { Router } from "express";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);

authorRouter.get("/:id", getAuthor);
authorRouter.post("/", createAuthor);
authorRouter.put("/:id", UpdateAuthor);
authorRouter.delete("/:id", deleteAuthor);

export default authorRouter;
