import { prisma } from '../database.js';

async function findByDiscipline(disciplineId: number) {
  const resultTeachersDisciplines = await prisma.teacherDiscipline.findMany({
    where: { disciplineId },
  });

  return resultTeachersDisciplines.map(async (item) => {
    await prisma.test.findMany({
      where: { teacherDisciplineId: item.id },
    });
  });
}

async function findByTeacher(teacherId: number) {
  const resultTeachersDisciplines = await prisma.teacherDiscipline.findMany({
    where: { teacherId },
  });

  return resultTeachersDisciplines.map(async (item) => {
    await prisma.test.findMany({
      where: { teacherDisciplineId: item.id },
    });
  });
}

async function findDisciplines() {
  return await prisma.term.findMany({
    include: {
      Discipline: {
        include: {
          TeacherDiscipline: {
            include: {
              Teacher: true,
              Test: {
                include: {
                  Category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function findTeachers() {
  return await prisma.teacher.findMany({
    include: {
      TeacherDiscipline: {
        include: {
          Test: {
            include: {
              Category: true,
            },
          },
          Discipline: {
            include: {
              Term: true,
            },
          },
        },
      },
    },
  });
}

export default {
  findByDiscipline,
  findByTeacher,
  findDisciplines,
  findTeachers,
};
