import { IUserRepository } from 'repositories/IUserRepository'

export class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    return await this.userRepository.getUsers()
  }
}
