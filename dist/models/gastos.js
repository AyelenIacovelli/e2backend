"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GastoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true,
        default: true,
    }
});
const Gasto = (0, mongoose_1.model)("Gasto", GastoSchema);
exports.default = Gasto;
