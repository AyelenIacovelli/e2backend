import { Request, Response } from "express";
import Gasto, { IGastos } from "../models/gastos";

export const crearGasto = async (req: Request, res: Response) => {
    const gastoData: IGastos = req.body
    const { nombre, apellido, dni, descripcion, precio } = gastoData
    if (!nombre || !apellido || !dni || !descripcion || !precio) {
        res.json({
            msg: "Faltan datos necesarios"
        })
        return
    }
    const gasto = new Gasto({
        nombre,
        apellido,
        dni,
        descripcion,
        precio
    })
    await gasto.save()
    res.json({
        msg: "Todo ok",
        gasto
    })
}

export const obtenerGastos = async (req: Request, res: Response) => {
    const condicion = {
        estado: true
    }
    const gastos = await Gasto.find(condicion)
    res.json({
        gastos
    })
}

export const obtenerGastosPorDni = async (req: Request, res: Response) => {
    const { dni } = req.params
    const gasto: IGastos | null = await Gasto.findOne({ dni: dni })
    res.json({
        gasto
    })
}