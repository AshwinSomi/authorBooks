import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book;

export const getAllBooks = async (_, res) => {
  const allBooks = await bookClient.findMany();
  res.json({ data: allBooks });
};

export const getBook = async (req, res) => {
  const bookId = req.params.id;
  const book = await bookClient.findUnique({
    where: {
      id: bookId,
    },
  });
  res.json({ data: book });
};

export const createBook = async (req, res) => {
  const bookData = req.body;
  const book = await bookClient.create({
    //data: bookData, //maybe this alo works maybe prisma is doing it automatically
    //to connect to esisting author
    data: {
      title: bookData.title,
      author: {
        connect: { id: bookData.authorId },
      },
    },
  });
  res.json({ data: book });
};

export const UpdateBook = async (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;
  const book = await bookClient.update({
    where: {
      id: bookId,
    },
    data: bookData,
  });
  res.json({ data: book });
};

export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  await bookClient.delete({
    where: {
      id: bookId,
    },
  });
  res.json({ message: "Book deleted" });
};
