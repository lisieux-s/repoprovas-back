import { Request, Response } from "express";
import * as testsService from '../services/testsService.js';

export async function findByDiscipline(req: Request, res: Response) {
    const { id } = req.params;
    const tests = await testsService.findByDiscipline(parseInt(id));
    res.send(tests);
}

export async function findByTeacher(req: Request, res: Response) {
    const { id } = req.params;
    const tests = await testsService.findByTeacher(parseInt(id));
    res.send(tests);
}

export async function findDisciplines(req: Request, res: Response) {
    const disciplines = await testsService.findDisciplines();
    console.log(disciplines)
    res.send(disciplines);
}

export async function findTeachers(req: Request, res: Response) {
    const teachers = await testsService.findTeachers();
    console.log(teachers)
    res.send(teachers)
}