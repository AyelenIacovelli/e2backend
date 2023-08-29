"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerGastosPorDni = exports.obtenerGastos = exports.crearGasto = void 0;
const gastos_1 = __importDefault(require("../models/gastos"));
const crearGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastoData = req.body;
    const { nombre, apellido, dni, descripcion, precio } = gastoData;
    if (!nombre || !apellido || !dni || !descripcion || !precio) {
        res.json({
            msg: "Faltan datos necesarios"
        });
        return;
    }
    const gasto = new gastos_1.default({
        nombre,
        apellido,
        dni,
        descripcion,
        precio
    });
    yield gasto.save();
    res.json({
        msg: "Todo ok",
        gasto
    });
});
exports.crearGasto = crearGasto;
const obtenerGastos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = {
        estado: true
    };
    const gastos = yield gastos_1.default.find(condicion);
    res.json({
        gastos
    });
});
exports.obtenerGastos = obtenerGastos;
const obtenerGastosPorDni = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const gasto = yield gastos_1.default.findOne({ dni: dni });
    res.json({
        gasto
    });
});
exports.obtenerGastosPorDni = obtenerGastosPorDni;
