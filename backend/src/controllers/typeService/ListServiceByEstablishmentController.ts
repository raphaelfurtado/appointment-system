import { Request, Response } from "express";
import { ListServiceByEstablishmentService } from "../../services/typeService/ListServiceByEstablishmentService";

class ListServiceByEstablishmentController{
    async handle(req: Request, res: Response){

        const { establishment_id } = req.body;

        const listServiceByEstablishmentService = new ListServiceByEstablishmentService();

        const serviceByEstablishment = await listServiceByEstablishmentService.execute({
            establishment_id: establishment_id
        });

        return res.json(serviceByEstablishment);
    }
}

export {ListServiceByEstablishmentController}