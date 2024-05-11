/*
  Warnings:

  - You are about to drop the column `amount` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Expense` table. All the data in the column will be lost.
  - Added the required column `Date` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Expense_Type` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalExpense` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "amount",
DROP COLUMN "date",
DROP COLUMN "title",
ADD COLUMN     "Date" TEXT NOT NULL,
ADD COLUMN     "Expense_Type" TEXT NOT NULL,
ADD COLUMN     "project" TEXT NOT NULL,
ADD COLUMN     "site" TEXT NOT NULL,
ADD COLUMN     "totalExpense" TEXT NOT NULL;
