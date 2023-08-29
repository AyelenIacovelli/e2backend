import { Router } from "express";
import { crearGasto, obtenerGastos, obtenerGastosPorDni } from "../controllers/gastos";

const router = Router()

router.post("/", crearGasto)
router.get("/", obtenerGastos)
router.get("/:dni", obtenerGastosPorDni)

export default router