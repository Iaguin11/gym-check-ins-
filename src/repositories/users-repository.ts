import { Prisma, User } from "@prisma/client";

export interface UserCreateInput {
  name: string;
  email: string;
  password_hash: string;
}

export interface UsersRepository {
  findByEmail(email: string): Promise<User | null>;
  create(data: Prisma.UserCreateInput): Promise<User>;
}
