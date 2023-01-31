import { Request, Response } from "express";
import { CreateCollaboratorService } from "../../services/collaborator/CreateCollaboratorService";

class CreateCollaboratorController {
    async handle(req: Request, res: Response) {

        const { name, photo, phone, email, password, birthDate, genre, status } = req.body;

        const createCollaboratorService = new CreateCollaboratorService();

        const collaborator = await createCollaboratorService.execute({
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