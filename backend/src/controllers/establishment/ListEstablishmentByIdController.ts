import { Request, Response } from "express";
import { ListEstablishmentByIdService } from "../../services/establishment/ListEstablishmentByIdService"

class ListEstablishmentByIdController{
    async handle(req: Request, res: Response){

        const id = req.query.id as string;

        const listEstablishmentByIdService = new ListEstablishmentByIdService();

        const establishment = await listEstablishmentByIdService.execute({
            id
        });

        return res.json(establishment);
    }
}

export { ListEstablishmentByIdController }