import { Decimal } from "@prisma/client/runtime";
import prismaClient from "../../prisma";

interface TypeServiceRequest {
    name: string;
    price: Decimal;
    duration: number;
    commission: Decimal;
    recurrence: number;
    description: string;
    status: string;
    establishment_id: string;
}

class CreateTypeServiceService {
    async execute({ name, price, duration, commission, recurrence, description, status, establishment_id }: TypeServiceRequest) {

        const typeService = prismaClient.service.create({
            data: {
                name: name,
                price: price,
                duration: duration,
                commission: commission,
                recurrence: recurrence,
                description: description,
                status: status,
                establishment_id: establishment_id
            }
        })

        return typeService;
    }
}

export { CreateTypeServiceService }