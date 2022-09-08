import { Request, Response } from 'express';
import * as questionService from '../services/questionService'
import * as answerService from '../services/answerService'
import { IAnswerData } from '../types/answerTypes';

export async function createQuestion(req: Request, res: Response) {
  // TODO
  const {askedBy, question} = req.body

  const result = await questionService.createQuestion({askedBy, question})

  res.sendStatus(201)

}

export async function createAnswer(req: Request, res: Response) {
  // TODO
  const questionId = parseInt(req.params.id)
  const answer:IAnswerData = req.body

  const result = await answerService.createAnswer({ ...answer, questionId })

  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  // TODO
  const result = await questionService.getAllQuestion()

  res.status(200).send(result)


}

export async function getById(req: Request, res: Response) {
  // TODO
  const id = Number(req.params.id)

  const result = await questionService.getById(id)

  res.status(200).send(result)


}
