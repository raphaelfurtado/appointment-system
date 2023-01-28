import { Decimal } from "@prisma/client/runtime";
import prismaClient from "../../prisma";

interface TypeServiceRequest {
    id: string;
    name: string;
    price: Decimal;
    duration: number;
    commission: Decimal;
    recurrence: number;
    description: string;
    status: string;
}

class EditTypeServiceService {
    async execute({ id, name, price, duration, commission, recurrence, description, status }: TypeServiceRequest) {

        const typeService = prismaClient.service.update({
            where:{
                id: id
            },
            data: {
                name: name,
                price: price,
                duration: duration,
                commission: commission,
                recurrence: recurrence,
                description: description,
                status: status
            }
        })

        return typeService;
    }
}

export { EditTypeServiceService }