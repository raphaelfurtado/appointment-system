import { Decimal } from "@prisma/client/runtime";
import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { EditTypeServiceService } from "../../services/typeService/EditTypeServiceService";

class EditTypeServiceController {
    async handle(req: Request, res: Response) {

        const { id, name, price, duration, commission, recurrence, description, status } = req.body;

        const editTypeServiceService = new EditTypeServiceService();

        const typeService = await editTypeServiceService.execute({
                id: id,
                name: name,
                price: price,
                duration: duration,
                commission: commission,
                recurrence: recurrence,
                description: description,
                status: status,
        })

        return res.json(typeService);
    }
}

export { EditTypeServiceController }