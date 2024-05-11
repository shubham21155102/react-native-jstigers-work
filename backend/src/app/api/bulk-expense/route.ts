import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
export async function GET(){
 // Bulk Add Expense
 interface DummyData {
    userId: string,
    project: string,
    site: string,
    totalExpense: Number,
    Date: string,
    Expense_Type: string,
}
 const dummyData:any=[
    {
     userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Jindal Steel",
      site: "Angul",
      totalExpense: 10000,
      Date: "12/12/2021",
      Expense_Type: "Labour",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "XYZ Corporation",
      site: "New York",
      totalExpense: 7500,
      Date: "05/25/2022",
      Expense_Type: "Materials",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "ABC Construction",
      site: "Los Angeles",
      totalExpense: 8500,
      Date: "09/10/2023",
      Expense_Type: "Equipment",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Tech Innovations",
      site: "San Francisco",
      totalExpense: 12000,
      Date: "03/15/2024",
      Expense_Type: "Miscellaneous",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Global Solutions",
      site: "London",
      totalExpense: 9200,
      Date: "11/02/2022",
      Expense_Type: "Transportation",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Future Builders",
      site: "Tokyo",
      totalExpense: 11000,
      Date: "07/20/2023",
      Expense_Type: "Labour",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Sunrise Contractors",
      site: "Sydney",
      totalExpense: 8800,
      Date: "08/05/2022",
      Expense_Type: "Materials",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Ocean Builders",
      site: "Mumbai",
      totalExpense: 9500,
      Date: "06/30/2023",
      Expense_Type: "Equipment",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Sky High Ventures",
      site: "Dubai",
      totalExpense: 10500,
      Date: "04/18/2024",
      Expense_Type: "Labour",
    },
    {
        userId:"a07b6c27-db31-4c51-b7a4-ea0feb337d4c",
      project: "Space Constructions",
      site: "Moscow",
      totalExpense: 8300,
      Date: "02/08/2023",
      Expense_Type: "Miscellaneous",
    }
  ];
    try {
        const x=dummyData.map((d:any)=>{
            d.totalExpense=d.totalExpense.toString();
        })
        const response = await db.expense.createMany({
        data:dummyData
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