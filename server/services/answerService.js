const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createAnswer(questionId, data) {
  return prisma.answer.create({
    data: {
      ...data,
      questionId: parseInt(questionId, 10),
    },
  });
}

async function getAnswersByQuestionId(questionId) {
  return prisma.answer.findMany({
    where: {
      questionId: parseInt(questionId, 10),
    },
  });
}

async function getAnswerById(answerId) {
  return prisma.answer.findUnique({
    where: {
      id: parseInt(answerId, 10),
    },
  });
}

async function updateAnswer(answerId, data) {
  return prisma.answer.update({
    where: { id: parseInt(answerId, 10) },
    data,
  });
}

async function deleteAnswer(answerId) {
  return prisma.answer.delete({
    where: { id: parseInt(answerId, 10) },
  });
}

module.exports = {
  createAnswer,
  getAnswersByQuestionId,
  getAnswerById,
  updateAnswer,
  deleteAnswer,
};
