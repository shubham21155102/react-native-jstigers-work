import { NextResponse } from "next/server";
export async function GET() {
  const expenses=[
    {
    project:"Jindal Steel",
    site:"Angul",
    Total_Expense:10000,
    Date:"12/12/2021",
    Expense_Type:"Labour",
  },
  {
    project:"Jindal Steel",
    site:"Angul",
    Total_Expense:10000,
    Date:"12/12/2021",
    Expense_Type:"Labour",
  },
  {
    project:"Jindal Steel",
    site:"Angul",
    Total_Expense:10000,
    Date:"12/12/2021",
    Expense_Type:"Labour",
  },
  {
    project:"Jindal Steel",
    site:"Angul",
    Total_Expense:10000,
    Date:"12/12/2021",
    Expense_Type:"Labour",
  },
  {
    project:"Jindal Steel",
    site:"Angul",
    Total_Expense:10000,
    Date:"12/12/2021",
    Expense_Type:"Labour",
  }
]
  return NextResponse.json({ message: "Hello from Next.js!" });
}