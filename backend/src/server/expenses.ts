'use server'
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export async function GetAllExpenses(){
    const response = await db.expense.findMany();
    return{
        status:200,
        data:response
    }

}