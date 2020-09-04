import { User } from 'entities/User'
import { IUserRepository } from 'repositories/IUserRepository'

export class PostgresUserRepository implements IUserRepository {
  private static users: User[] = []

  async findByEmail(email: string): Promise<User> {
    const user = PostgresUserRepository.users.find(
      (user) => user.email === email,
    )
    return user as User
  }

  async save(user: User): Promise<void> {
    PostgresUserRepository.users.push(user)
  }

  async getUsers(): Promise<User[]> {
    return PostgresUserRepository.users
  }
}
