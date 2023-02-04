import prismaClient from "../../prisma";

interface CollaboratorByServiceRequest {
    collaborator_id: string;
    service_id: string;
    status: string;
}

class CreateCollaboratorTypeServiceService {
    async execute({ collaborator_id,  service_id, status}: CollaboratorByServiceRequest) {

        const collaboratorAndServideAlreadyExists = await prismaClient.collaboratorOnServices.findFirst({
            where:{
                collaborator_id: collaborator_id,
                service_id: service_id
            }
        });

        if(collaboratorAndServideAlreadyExists){
            throw new Error('Collaborator and Service Already exists!');
        }

        const collaboratorByService = await prismaClient.collaboratorOnServices.create({
            data: {
                collaborator_id: collaborator_id,
                service_id: service_id,
                status: status
            }
        });

        return collaboratorByService;
    }
}

export { CreateCollaboratorTypeServiceService }