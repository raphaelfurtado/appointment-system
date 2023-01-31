import prismaClient from "../../prisma";

interface CollaboratorRequest {
    name: string;
    photo: string;
    phone: string;
    email: string;
    password: string;
    birthDate: Date;
    genre: string;
    status: string;
}

class CreateCollaboratorService {
    async execute({ name, photo, phone, email, password, birthDate, genre, status }: CollaboratorRequest) {

        const emailAlreadyExists = await prismaClient.collaborator.findFirst({
            where:{
                    email: email,
            }
        });

        const phoneAlreadyExists = await prismaClient.collaborator.findFirst({
            where:{
                    phone: phone,
            }
        });

        if(emailAlreadyExists){
            throw new Error('Email Already exists!');
        }

        if(phoneAlreadyExists){
            throw new Error('Phone Already exists!');
        }

        const collaborator = prismaClient.collaborator.create({
            data: {
                name: name,
                photo: photo,
                phone: phone,
                email: email,
                password: password,
                birthDate: birthDate,
                genre: genre,
                status: status,
            }
        });

        return collaborator;
    }
}

export { CreateCollaboratorService }