import { NextResponse } from "next/server";

import { prisma } from "@/libs/prisma"
// console.log(prisma)
export async function OPTIONS(request){
    console.log('options')
    return NextResponse.json("response")
}

export async function POST(request){ //post para crear informacion, request la informacion que entra
    const {user,userId,score,secondsPlayed,movementsNumber,map,mapWin}=await request.json()//extramos el user y score de la request que nos enviaron a la api
    const newScore=await prisma.jigsawScore.create({ //creamos un nuevo objeto con los datos
        data:{
            map,
            user,
            userId,
            score,
            secondsPlayed,
            movementsNumber,
            mapWin,

        }
    })
    return NextResponse.json(newScore)//la api nos va a responder con esto
}
// export async function PUT()