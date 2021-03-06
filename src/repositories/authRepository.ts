import { prisma } from '../database.js';
import { UserData } from '../services/authService.js';

async function insert(data: UserData) {
  await prisma.user.create({
    data,
  });
}

async function findByEmail(email: string) {
  return await prisma.user.findFirst({
    where: { email },
  });
}

async function findById(id: number) {
  return await prisma.user.findFirst({
    where: { id },
  });
}

export default {
  insert,
  findByEmail,
  findById,
};
