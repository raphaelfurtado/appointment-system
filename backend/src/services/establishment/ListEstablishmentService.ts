import prismaClient from "../../prisma"

class ListEstablishmentService{
    async execute(){

        const establishments = await prismaClient.establishment.findMany({
            orderBy: {
                created_at: 'desc',
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
        
        return establishments;
    }
}

export { ListEstablishmentService }
