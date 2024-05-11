import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export async function GET() {
  const response = await db.expense.findMany();
  return NextResponse.json({
    status: 200,
    data: response,
  })
}

interface Data {
    userId?: string;
    project: string;
    site: string;
    Date: string;
    totalExpense: string;
    Expense_Type: string; 
    expenseId?: string;
};

export async function POST(req: Request, res: Response) {
  const data:Data=await req.json();
  console.log(data);
  const { userId, project, site, Date, totalExpense, Expense_Type } = data; 
  if(!userId || !project || !site || !Date || !totalExpense || !Expense_Type){
    return NextResponse.json({
      status:400,
      error:"Please provide all the required fields"
    })
  }
  try {
    const response = await db.expense.create({
      data: {
        userId: userId,
        project: project,
        site: site,
        Date: Date,
        totalExpense: totalExpense,
        Expense_Type: Expense_Type,
      },
    });
    return NextResponse.json(response);
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status:500,
      error:e
    });
  }
}
export async function PATCH(req: Request, res: Response) {
  const data:Data=await req.json();
  console.log(data);
  const { userId, project, site, Date, totalExpense, Expense_Type } = data; 
  try {
    const response = await db.expense.update({
      where: {
        id: data.expenseId,
      },
      data: {
        project: project,
        site: site,
        Date: Date,
        totalExpense: totalExpense,
        Expense_Type: Expense_Type,
      },
    });
    return NextResponse.json(response);
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status:500,
      error:e
    });
  }
}
export async function DELETE(req: Request, res: Response) {
  const data:Data=await req.json();
  console.log(data);
  try {
    const response = await db.expense.delete({
      where: {
        id: data.expenseId,
      },
    });
    return NextResponse.json(response);
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status:500,
      error:e
    });
  }
}