import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  UpdateBook,
} from "../controller/books.controller";
import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);

bookRouter.get("/:id", getBook);
bookRouter.post("/", createBook);
bookRouter.put("/:id", UpdateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
