"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastos_1 = require("../controllers/gastos");
const router = (0, express_1.Router)();
router.post("/", gastos_1.crearGasto);
router.get("/", gastos_1.obtenerGastos);
router.get("/:dni", gastos_1.obtenerGastosPorDni);
exports.default = router;
