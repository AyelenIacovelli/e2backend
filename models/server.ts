import express, { Express } from "express"
import { conectarBaseDeDatos } from "../database/config"
import gastosRoutes from "../routes/gastos"

export class Server {

    app: Express

    constructor() {
        this.app = express()
        this.conexionBaseDeDatos()
        this.middlewares()
        this.routes()
    }

    async conexionBaseDeDatos(): Promise<void> {
        await conectarBaseDeDatos()
    }

    middlewares(): void {
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use("/gastos", gastosRoutes)
    }

    listen(): void {
        this.app.listen(8080, () => {
            console.log(`Corriendo en puerto 8080`);

        })
    }
}