import { PostgresUserRepository } from 'repositories/implementations/PostgresUserRepository'
import { GetUserByIdController } from './getUserByIdController'
import { GetUserByIdUseCase } from './getUserByUseCase'

const postgresRepository = new PostgresUserRepository()
const getUserByIdUseCase = new GetUserByIdUseCase(postgresRepository)

const getUserByIdController = new GetUserByIdController(getUserByIdUseCase)

export { getUserByIdController, getUserByIdUseCase }
