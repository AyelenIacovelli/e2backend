import mongoose from "mongoose"

//configuro conexion a base de datos
export const conectarBaseDeDatos = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb+srv://ayeleniacovelli:gremory14@clusterdeayeleniacovell.gdjgtzv.mongodb.net/") //string de conexion en mongo atlas
        console.log("Base de datos online");
    } catch (error) {
        console.log(error)
        throw new Error("Error al iniciar la base de datos")
    }
}