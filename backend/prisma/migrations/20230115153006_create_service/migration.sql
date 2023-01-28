-- CreateTable
CREATE TABLE "service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(9,2) NOT NULL,
    "duration" INTEGER NOT NULL,
    "commission" DECIMAL(65,30) NOT NULL,
    "recurrence" INTEGER NOT NULL,
    "decription" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "establishment_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_establishment_id_key" ON "service"("establishment_id");

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_establishment_id_fkey" FOREIGN KEY ("establishment_id") REFERENCES "establishment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
