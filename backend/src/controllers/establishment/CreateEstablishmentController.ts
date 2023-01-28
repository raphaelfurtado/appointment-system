import { Request, Response } from "express";
import { CreateEstablishmentService } from "../../services/establishment/CreateEstablishmentService";

class CreateEstablishmentController{
    async handle(req: Request, res: Response){

        const { name, email, password } = req.body;

        const createEstablishmentService = new CreateEstablishmentService();

        const establishment = await createEstablishmentService.execute({
            name,
            email,
            password
        });

        return res.json(establishment);
    }
}

export { CreateEstablishmentController }