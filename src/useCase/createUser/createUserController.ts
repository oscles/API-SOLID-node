import { Request, Response } from 'express'
import { CreateUserUseCase } from './createUserUseCase'

export class CreateUserController {
  constructor(private createUserCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    let resp: Response<any>

    try {
      await this.createUserCase.execute({ name, email, password })
      resp = response
        .status(201)
        .json({ message: 'user created successfully.' })
    } catch (error) {
      resp = response.status(400).json({
        message: error.message || 'Unexpected error.',
      })
    }

    return resp
  }
}
