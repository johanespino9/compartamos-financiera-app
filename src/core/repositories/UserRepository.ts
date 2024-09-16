import { User } from '../models/User';

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUser(id: number): Promise<User>;
  createUser(user: any): Promise<void>;
  updateUser(id: number, user: User): Promise<void>;
  deleteUser(id: number): Promise<void>;
}