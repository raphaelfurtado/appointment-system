import { Decimal } from "@prisma/client/runtime";
import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { CreateTypeServiceService } from "../../services/typeService/CreateTypeServiceService";

class CreateTypeServiceController {
    async handle(req: Request, res: Response) {

        const { name, price, duration, commission, recurrence, description, status, establishment_id } = req.body;

        const createTypeServiceService = new CreateTypeServiceService();

        const typeService = await createTypeServiceService.execute({
                name: name,
                price: price,
                duration: duration,
                commission: commission,
                recurrence: recurrence,
                description: description,
                status: status,
                establishment_id: establishment_id
        })

        return res.json(typeService);
    }
}

export { CreateTypeServiceController }