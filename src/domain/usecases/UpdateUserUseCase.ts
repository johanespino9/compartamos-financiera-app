import { UserRepository } from '../../core/repositories/UserRepository';
import { User } from '../../core/models/User';

export class UpdateUserUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number, user: User): Promise<void> {
    return await this.userRepository.updateUser(id, user);
  }
}