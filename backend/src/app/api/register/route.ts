import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

interface Data{
        name:string;
        email:string;
        hashedPassword:string;
}
export async function POST(req:Request,res:Response){
    const data:Data=await req.json();
    console.log(data);
    const {name,email,hashedPassword}=data;
    console.log(name,email,hashedPassword)
    if(!name || !email || !hashedPassword){
        return NextResponse.json({
            status:400,
            error:"Please provide all the required fields"
        })
    }
    try{
        const response = await db.user.create({
            data:{
                name:name,
                email:email,
                hashedPassword:hashedPassword
            }
        });
        return NextResponse.json(response);
    }catch(e){
        console.log(e);
        return NextResponse.json({
            status:500,
            error:e
        });
    }
}