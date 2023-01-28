import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface EstablishmentRequest{
    name: string;
    email: string;
    password: string;
}

class CreateEstablishmentService{

    async execute({name, email, password}: EstablishmentRequest){

        if(!email){
            throw new Error('Email incorrect!');
        }

        const establishmentAlreadyExist = await prismaClient.establishment.findFirst({
            where: {
                email: email
            }
        });

        if(establishmentAlreadyExist){
            throw new Error('Establishment Already exists!')
        }

        const passwordHash = await hash(password, 8);

        const establishment = await prismaClient.establishment.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                photo: '',
                cover: ''
            }
        });

        return establishment;
    }
}

export {CreateEstablishmentService}