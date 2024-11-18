import express from "express";
import authorRouter from "./routes/author.router";
import { PrismaClient } from "@prisma/client";
import bookRouter from "./routes/book.router";

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/authors", authorRouter);

app.use("/books", bookRouter);

// app.get("/ping", (req, res) => {
//   res.json({ message: "pont" });
// });

const userClient = new PrismaClient().user;

app.get("/user/", async (req, res) => {
  const user = await userClient.findMany();
  res.json({ data: user });
});

app.post("/user/", async (req, res) => {
  try {
    const user = await userClient.create({
      data: req.body,
    });
    res.json({ data: user });
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log("server started");
});
