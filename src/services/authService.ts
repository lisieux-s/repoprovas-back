import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '@prisma/client';
import authRepository from '../repositories/authRepository.js';

export type UserData = Omit<User, 'id'>;

export async function insert(userData: UserData) {
    const existingUser = await authRepository.findByEmail(userData.email);
    if(existingUser) throw { type: 'CONFLICT', message: 'e-mail already in use' }

    const passwordHash = bcrypt.hashSync(userData.password, 13)

    await authRepository.insert({ ...userData, password: passwordHash })
}
