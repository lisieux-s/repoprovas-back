import { prisma } from '../database.js';

async function findByDiscipline(disciplineId: number) {
    const resultTeachersDisciplines = await prisma.teacherDiscipline.findMany({
        where: { disciplineId }
    })

    return resultTeachersDisciplines.map(async (item) => {
        await prisma.test.findMany({
            where: { teacherDisciplineId: item.id}
        })
    })
}

async function findByTeacher(teacherId: number) {
    const resultTeachersDisciplines = await prisma.teacherDiscipline.findMany({
        where: { teacherId }
    })

    return resultTeachersDisciplines.map(async (item) => {
        await prisma.test.findMany({
            where: { teacherDisciplineId: item.id}
        })
    })
}


export default {
    findByDiscipline, findByTeacher
}
