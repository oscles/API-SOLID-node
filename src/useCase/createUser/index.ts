import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { PostgresUserRepository } from '../../repositories/implementations/PostgresUserRepository'
import { CreateUserController } from './createUserController'
import { CreateUserUseCase } from './createUserUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }
