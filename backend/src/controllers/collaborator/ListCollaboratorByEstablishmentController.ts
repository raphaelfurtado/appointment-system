import { Request, Response } from "express";
import { ListCollaboratorByEstablishmentService } from "../../services/collaborator/ListCollaboratorByEstablishmentService";

class ListCollaboratorByEstablishmentController {
    async handle(req: Request, res: Response) {

        const { establishment_id } = req.body;

        const listCollaboratorByEstablishmentController = new ListCollaboratorByEstablishmentService();

        const listCollaborator = await listCollaboratorByEstablishmentController.execute({
            establishment_id
        });

        return res.json(listCollaborator);
    }
}

export { ListCollaboratorByEstablishmentController }