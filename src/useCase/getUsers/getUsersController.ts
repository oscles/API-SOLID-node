import { User } from 'entities/User'
import { Request, Response } from 'express'
import { GetUserUseCase } from './getUsersUseCase'

export class GetUsersController {
  constructor(private getUsersUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const users: User[] = await this.getUsersUseCase.execute()
      return response.status(200).json({ users })
    } catch (error) {
      return response
        .status(404)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
