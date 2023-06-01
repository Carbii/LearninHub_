import { Router } from "express"
import { getlogin, getEstudiantes, getEstudiante, getMateria, getMaterias, getNotasEstudiante, getNotasEstudiantes, getInsertarEstudiante} from "../Controllers/estudiante.controllers.js"


const router = Router()

router.post('/login', getlogin)


router.get('/Ests', getEstudiantes)

router.get('/Est/:id', getEstudiante)

router.get('/NotasEst/:id', getNotasEstudiante)

router.get('/NotasEsts', getNotasEstudiantes)


router.get('/Mat/:curso', getMateria)

router.get('/Mats', getMaterias)

router.post('/InsertarEst', getInsertarEstudiante)

router.post('/notasEstudiante', (req, res) => res.send('notas estudiante'))




export default router 