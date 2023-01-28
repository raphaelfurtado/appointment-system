import { Request, Response } from "express";
import { EditEstablishmentService } from "../../services/establishment/EditEstablishmentService";

class EditEstablishmentController{
    async handle(req: Request, res: Response){

        const {id, name, photo, cover, email} = req.body;

        const editEstablishmentService = new EditEstablishmentService();

        const establishment = await editEstablishmentService.execute({
            id,
            name,
            photo,
            cover,
            email
        });

        return res.json(establishment);
    }
}

export {EditEstablishmentController}