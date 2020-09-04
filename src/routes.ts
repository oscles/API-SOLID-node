import { Router } from 'express'
import { createUserController } from 'useCase/createUser'
import { getUserByIdController } from 'useCase/getUserById'
import { getUsersController } from 'useCase/getUsers'

const router = Router()

router.get('/users', (request, response) =>
  getUsersController.handle(request, response),
)

router.post('/users', (request, response) =>
  createUserController.handle(request, response),
)

router.get('/users/:id', (request, response) =>
  getUserByIdController.handle(request, response),
)

export { router }
