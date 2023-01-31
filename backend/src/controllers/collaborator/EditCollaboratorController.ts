import { Request, Response } from "express";
import { EditCollaboratorService } from "../../services/collaborator/EditCollaboratorService";

class EditCollaboratorController {
    async handle(req: Request, res: Response) {

        const { id, name, photo, phone, email, password, birthDate, genre, status } = req.body;

        const editCollaboratorService = new EditCollaboratorService();

        const collaborator = await editCollaboratorService.execute({
            id,
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

export { EditCollaboratorController }