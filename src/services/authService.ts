import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { prisma, User } from '@prisma/client';
import authRepository from '../repositories/authRepository.js';

export type UserData = Omit<User, 'id'>;

export async function insert(userData: UserData) {
  const existingUser = await authRepository.findByEmail(userData.email);
  if (existingUser)
    throw { type: 'CONFLICT', message: 'e-mail already in use' };

  const passwordHash = bcrypt.hashSync(userData.password, 13);

  await authRepository.insert({ ...userData, password: passwordHash });
}

export async function signIn(userData: UserData) {
  const existingUser = await authRepository.findByEmail(userData.email);
  if (!existingUser)
    throw { type: 'UNAUTHORIZED', message: 'e-mail not found' };
  validateSignIn(userData, existingUser);
  const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET);
  return token;
}

export async function findById(id: number) {
  const user = await authRepository.findById(id);
  if(!user) throw { type: 'NOT_FOUND' }
  return user;
}

function validateSignIn(userData: UserData, user: User) {
  const { password } = userData;
  if (!bcrypt.compareSync(password, user.password)) {
    throw { type: 'UNAUTHORIZED' };
  }
}
