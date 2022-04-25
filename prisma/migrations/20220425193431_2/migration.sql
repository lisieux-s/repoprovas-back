/*
  Warnings:

  - You are about to drop the column `teacherId` on the `terms` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `terms` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `termId` to the `disciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `terms` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "terms" DROP CONSTRAINT "terms_teacherId_fkey";

-- AlterTable
ALTER TABLE "disciplines" ADD COLUMN     "termId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "terms" DROP COLUMN "teacherId",
ADD COLUMN     "number" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "terms_number_key" ON "terms"("number");

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
