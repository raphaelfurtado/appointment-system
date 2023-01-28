/*
  Warnings:

  - You are about to drop the column `foto` on the `establishment` table. All the data in the column will be lost.
  - Added the required column `photo` to the `establishment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "establishment" DROP COLUMN "foto",
ADD COLUMN     "photo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "collaborator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collaboratorOnService" (
    "service_id" TEXT NOT NULL,
    "collaborator_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "collaboratorOnService_pkey" PRIMARY KEY ("service_id","collaborator_id")
);

-- AddForeignKey
ALTER TABLE "collaboratorOnService" ADD CONSTRAINT "collaboratorOnService_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collaboratorOnService" ADD CONSTRAINT "collaboratorOnService_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
