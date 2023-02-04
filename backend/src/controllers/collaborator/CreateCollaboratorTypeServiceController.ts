import { Request, Response } from "express";
import { CreateCollaboratorTypeServiceService } from "../../services/collaboratorByTypeService/CreateCollaboratorTypeServiceService";

class CreateCollaboratorTypeServiceController {
    async handle(req: Request, res: Response) {

        const { collaborator_id, service_id, status } = req.body;

        const createCollaboratorTypeService = new CreateCollaboratorTypeServiceService();

        const collaboratorTypeService = await createCollaboratorTypeService.execute({
            collaborator_id, 
            service_id, 
            status
        });

        return res.json(collaboratorTypeService);
    }
}

export { CreateCollaboratorTypeServiceController }