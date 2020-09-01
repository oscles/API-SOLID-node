import { User } from 'entities/User'
import { IUserRepository } from 'repositories/IUserRepository'

export class PostgresUserRepository implements IUserRepository {
  private users: User[] = []

  constructor() {}

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email)
    return user as User
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}
