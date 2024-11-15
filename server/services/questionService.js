const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createQuestion(quizId, data) {
  return prisma.question.create({
    data: {
      ...data,
      quizId: typeof quizId === "string" ? parseInt(quizId) : quizId,
    },
  });
}

async function getQuestionsByQuizId(quizId) {
  return prisma.question.findMany({
    where: {
      quizId: parseInt(quizId),
    },
    include: {
      answers: true,
    },
  });
}

async function getQuestionById(questionId) {
  const id = parseInt(questionId, 10);
  if (isNaN(id)) {
    throw new Error("Invalid question ID");
  }

  return prisma.question.findUnique({
    where: {
      id: id,
    },
    include: {
      answers: true,
    },
  });
}

async function updateQuestion(questionId, data) {
  const id = parseInt(questionId, 10);

  if (isNaN(id)) {
    throw new Error("Invalid question ID");
  }

  return prisma.question.update({
    where: {
      id: id,
    },
    data: data,
  });
}

async function deleteQuestion(questionId) {
  const id = parseInt(questionId, 10);

  if (isNaN(id)) {
    throw new Error("Invalid question ID");
  }

  return prisma.question.delete({
    where: {
      id: id,
    },
  });
}

module.exports = {
  createQuestion,
  getQuestionsByQuizId,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};
