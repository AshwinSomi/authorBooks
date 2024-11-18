import { PrismaClient } from "@prisma/client";

const authorClient = new PrismaClient().author;

export const getAllAuthors = async (_, res) => {
  const allAuthors = await authorClient.findMany({
    include: {
      books: true,
    },
  });
  res.json({ data: allAuthors });
};

export const getAuthor = async (req, res) => {
  const authorId = req.params.id;
  const author = await authorClient.findUnique({
    where: {
      id: authorId,
    },
    include: {
      books: true,
    },
  });
  res.json({ data: author });
};

export const createAuthor = async (req, res) => {
  const authorData = req.body;
  const author = await authorClient.create({
    data: authorData,
  });
  res.json({ data: author });
};

export const UpdateAuthor = async (req, res) => {
  const authorId = req.params.id;
  const authorData = req.body;
  const author = await authorClient.update({
    where: {
      id: authorId,
    },
    data: authorData,
  });
  res.json({ data: author });
};

export const deleteAuthor = async (req, res) => {
  const authorId = req.params.id;
  await authorClient.delete({
    where: {
      id: authorId,
    },
  });
  res.json({ message: "author deleted" });
};
