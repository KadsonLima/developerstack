import { prisma } from "../config/database";
import { IAnswerData } from "../types/answerTypes";


export async function findById(questionId: number) {
    return prisma.answer.findUnique({
      where: { id: questionId },
    });
  }
  
export async function insert(createAnswerData: IAnswerData) {
    const {answer, questionId, answeredBy} = createAnswerData
    
    await prisma.answer.create({
      data: {answer, questionId, answereBy:answeredBy},
    });
  }