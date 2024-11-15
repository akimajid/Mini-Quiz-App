const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function submitQuiz(userId, quizId, answers) {
  let score = 0;
  for (let answer of answers) {
    const correctAnswer = await prisma.answer.findUnique({
      where: { id: answer.answerId },
    });
    if (correctAnswer.isCorrect) score += 1;
  }

  return prisma.result.create({
    data: {
      userId,
      quizId: parseInt(quizId, 10),
      score,
      submittedAt: new Date(),
    },
  });
}

async function getResultsByUserId(userId) {
  return prisma.result.findMany({
    where: { userId },
    include: { quiz: true },
  });
}

module.exports = { submitQuiz, getResultsByUserId };
