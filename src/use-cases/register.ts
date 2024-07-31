import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(private userRepository: any) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userWithSameEmail) {
      throw new Error("E-mail already exists");
    }
    await this.userRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
