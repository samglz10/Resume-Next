/*
  Warnings:

  - Added the required column `endorsed` to the `Endorsements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Endorsements" ADD COLUMN     "endorsed" BOOLEAN NOT NULL;
