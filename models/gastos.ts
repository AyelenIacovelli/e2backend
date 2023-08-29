import { Model, Schema, model } from "mongoose"

export interface IGastos {
    nombre: string
    apellido: string
    dni: number
    descripcion: string
    precio: number
    estado: boolean
}

const GastoSchema = new Schema<IGastos>({
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
})

const Gasto: Model<IGastos> = model<IGastos>("Gasto", GastoSchema)

export default Gasto