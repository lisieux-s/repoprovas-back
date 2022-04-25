import testsRepository from '../repositories/testsRepository.js';

export async function findByDiscipline(disciplineId: number) {
    return await testsRepository.findByDiscipline(disciplineId);
}

export async function findByTeacher(teacherId: number) {
    return await testsRepository.findByTeacher(teacherId);
}

export async function findDisciplines() {
    return await testsRepository.findDisciplines();
}

export async function findTeachers() {
    return await testsRepository.findTeachers();
}