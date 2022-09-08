import {prisma} from "../config/database";
import {IQuestionData} from '../types/questionTypes'


export async function createQuestion(params:IQuestionData) {

    return prisma.question.create({data:params})
}

export async function getQuestions() {

    return prisma.question.findMany()
}

export async function getById(params:number) {

    return prisma.question.findUnique({
        where:{id:params}
    })
}