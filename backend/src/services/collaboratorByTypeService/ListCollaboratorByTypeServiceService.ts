import prismaClient from "../../prisma";
interface CollaboratorRequest{
    service_id: string;
}

class ListCollaboratorByTypeServiceService  {
    async execute({ service_id }: CollaboratorRequest) {

        const collaborator = await prismaClient.collaboratorOnServices.findMany({
            where: {
                service_id: service_id
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
                service: {
                    select: {
                        name: true,
                        
                    }
                }
            }
        });

        return collaborator;
    }
}

export { ListCollaboratorByTypeServiceService  }