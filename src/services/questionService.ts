import * as questionRepositories from "../repositories/questionRepository"
import { IQuestionData } from '../types/questionTypes';

export async function createQuestion(body:IQuestionData) {
    
    const result = await questionRepositories.createQuestion(body)

    return result

}

export async function getAllQuestion() {
    
    const result = await questionRepositories.getQuestions()

    return result

}

export async function getById(id:number) {
    
    const result = await questionRepositories.getById(id)

    return result

}

