import { User } from 'entities/User'
import { IUserRepository } from 'repositories/IUserRepository'

export class GetUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<User> {
    return await this.userRepository.getUserById(id)
  }
}
