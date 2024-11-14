const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createQuiz(data, userId) {
  return prisma.quiz.create({
    data: { ...data, createdBy: userId },
  });
}

async function getQuizzes() {
  return prisma.quiz.findMany();
}

async function getQuizById(id) {
  return prisma.quiz.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

async function updateQuiz(id, data) {
  return prisma.quiz.update({
    where: {
      id: parseInt(id),
    },
    data: data,
  });
}

async function deleteQuiz(id) {
  return prisma.quiz.delete({
    where: {
      id: parseInt(id),
    },
  });
}

module.exports = {
  createQuiz,
  getQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
};
