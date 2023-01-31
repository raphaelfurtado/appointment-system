import prismaClient from "../../prisma";
interface CollaboratorRequest{
    establishment_id: string;
}

class ListCollaboratorByEstablishmentService  {
    async execute({ establishment_id }: CollaboratorRequest) {

        const collaborator = await prismaClient.collaboratorOnEstablishment.findMany({
            where: {
                establishment_id: establishment_id
            },
            include: {
                collaborator: {
                    select:{
                        
                        name: true,
                        email: true,
                        birthDate: true,
                        genre: true,
                        phone: true,
                        status: true,
                    }
                },
                establishment: {
                    select: {
                       
                        name: true,
                        email: true,
                    }
                }
            }
        });

        return collaborator;
    }
}

export { ListCollaboratorByEstablishmentService  }