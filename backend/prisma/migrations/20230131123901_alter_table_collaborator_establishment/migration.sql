/*
  Warnings:

  - The primary key for the `CollaboratorOnEstablishment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `CollaboratorOnEstablishment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CollaboratorOnEstablishment" DROP CONSTRAINT "CollaboratorOnEstablishment_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "CollaboratorOnEstablishment_pkey" PRIMARY KEY ("collaborator_id");
