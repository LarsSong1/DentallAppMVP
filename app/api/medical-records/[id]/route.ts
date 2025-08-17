import medicalRecords from "@/models/medical-records";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";



export async function DELETE(_: Request, {params}: {params: Promise<{id: string}>}){
    await connectDB()
    try {
        const {id} = await params
        const deleted = await medicalRecords.findOneAndDelete({ id })


        if (!deleted){
            return NextResponse.json("No se encontro el id para eliminar este registro")
        }

        return NextResponse.json({mesage: "Registro Médico eliminado correctamenrte"})

    } catch(error){
        console.error("Error al eliminar este registro")
        return NextResponse.json('No se ha podido eliminar este registro')
    }

}




