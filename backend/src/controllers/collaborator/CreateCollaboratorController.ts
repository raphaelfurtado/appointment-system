import { Request, Response } from "express";
import { CreateCollaboratorService } from "../../services/collaborator/CreateCollaboratorService";

class CreateCollaboratorController {
    async handle(req: Request, res: Response) {

        const { establishment_id, name, photo, phone, email, password, birthDate, genre, status } = req.body;

        const createCollaboratorService = new CreateCollaboratorService();

        const collaborator = await createCollaboratorService.execute({
            establishment_id,
            name,
            photo,
            phone,
            email,
            password,
            birthDate,
            genre,
            status,
        });

        return res.json(collaborator);
    }
}

export { CreateCollaboratorController }