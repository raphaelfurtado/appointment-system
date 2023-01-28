import prismaClient from "../../prisma";

interface EstablishmentRequest{
    id: string;
}

class ListEstablishmentByIdService{
    async execute({ id }: EstablishmentRequest){

        const establishment = await prismaClient.establishment.findFirst({
            where:{
                id: id
            },
            select:{
                id: true,
                name: true,
                photo: true,
                cover: true,
                email: true,    
                address: true
            }

        });
        return establishment;
    }
}

export { ListEstablishmentByIdService }