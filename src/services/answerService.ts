// TODO
import * as answerRepositories from "../repositories/answerRepository"
import { IAnswerData } from '../types/answerTypes';

export async function createAnswer(answer:IAnswerData) {
    
    const result = await answerRepositories.insert(answer)

    return result

}

