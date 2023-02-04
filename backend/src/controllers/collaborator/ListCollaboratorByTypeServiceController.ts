import { Request, Response } from "express";
import { ListCollaboratorByTypeServiceService } from "../../services/collaboratorByTypeService/ListCollaboratorByTypeServiceService";

class ListCollaboratorByTypeServiceController {
    async handle(req: Request, res: Response) {

        const { service_id } = req.body;

        const listCollaboratorBytypeService = new ListCollaboratorByTypeServiceService();

        const listCollaborator = await listCollaboratorBytypeService.execute({
            service_id
        });

        return res.json(listCollaborator);
    }
}

export { ListCollaboratorByTypeServiceController }