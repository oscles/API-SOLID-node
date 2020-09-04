import { Request, Response } from 'express'
import { GetUserByIdUseCase } from './getUserByUseCase'

export class GetUserByIdController {
  constructor(private getUserByIdUseCase: GetUserByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    try {
      const user = await this.getUserByIdUseCase.execute(id)
      return response.status(200).json({ user })
    } catch (error) {
      return response
        .status(404)
        .json({ message: error.message || 'Unexpected error.' })
    }
  }
}
