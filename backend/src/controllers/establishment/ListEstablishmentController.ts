import { Request, Response } from "express";
import { ListEstablishmentService } from "../../services/establishment/ListEstablishmentService";

class ListEstablishmentController{
    async handle(req: Request, res: Response){

        const listEstablishmentService = new ListEstablishmentService();

        const establishments = await listEstablishmentService.execute();

        return res.json(establishments);
    }
}

export { ListEstablishmentController }