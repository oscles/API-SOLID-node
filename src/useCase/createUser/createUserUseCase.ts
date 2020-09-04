import { User } from 'entities/User'
import { IMailProvider } from 'providers/IMailProvider'
import { IUserRepository } from 'repositories/IUserRepository'
import { CreateUserRequestDTO } from './createUserDTO'

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private emailProvider: IMailProvider,
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const { email, name } = data
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)
    await this.userRepository.save(user)
    /* await this.emailProvider.sendMail({
      to: {
        email,
        name,
      },
      from: {
        name: 'Oscloud Community 2020',
        email: '',
      },
      subject: 'Email Test 2020',
      body: `<p> Hello world community </p>`,
    }) */
  }
}
