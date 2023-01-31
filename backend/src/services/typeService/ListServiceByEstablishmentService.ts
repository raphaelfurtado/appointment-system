import prismaClient from "../../prisma";

interface ServiceByEstablishment{
    establishment_id: string;
}

class ListServiceByEstablishmentService{
    async execute({establishment_id}: ServiceByEstablishment){

        const serviceByEstablishment = await prismaClient.service.findMany({
            where:{
                establishment_id: establishment_id
            },
            select:{
                id: true,
                name: true,
                description: true,
                price: true,
                duration: true,
                commission: true,
                status: true,
                establishment: true
            }
        });

        return serviceByEstablishment;
    }
}

export {ListServiceByEstablishmentService}
