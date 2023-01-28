-- CreateTable
CREATE TABLE "CollaboratorOnEstablishment" (
    "establishment_id" TEXT NOT NULL,
    "collaborator_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CollaboratorOnEstablishment_pkey" PRIMARY KEY ("establishment_id","collaborator_id")
);

-- AddForeignKey
ALTER TABLE "CollaboratorOnEstablishment" ADD CONSTRAINT "CollaboratorOnEstablishment_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollaboratorOnEstablishment" ADD CONSTRAINT "CollaboratorOnEstablishment_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
