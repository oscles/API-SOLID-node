import { PostgresUserRepository } from 'repositories/implementations/PostgresUserRepository'
import { GetUserUseCase } from 'useCase/getUsers/getUsersUseCase'
import { GetUsersController } from './getUsersController'

const postgresRepository = new PostgresUserRepository()
const getUsersUseCase = new GetUserUseCase(postgresRepository)

const getUsersController = new GetUsersController(getUsersUseCase)

export { getUsersController, getUsersUseCase }
