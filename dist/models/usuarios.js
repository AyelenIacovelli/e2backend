"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    dni: {
        type: Number,
        unique: true
    }
});
const Usuario = (0, mongoose_1.model)("Usuario", UsuarioSchema);
exports.default = Usuario;
