import prismaClient from "../../prisma";

interface CollaboratorRequest {
    id: string;
    establishment_id: string;
    name: string;
    photo: string;
    phone: string;
    email: string;
    password: string;
    birthDate: Date;
    genre: string;
    status: string;
}

class EditCollaboratorService {
    async execute({id, establishment_id, name, photo, phone, email, password, birthDate, genre, status }: CollaboratorRequest) {

        const collaborator = await prismaClient.collaborator.update({
            where: {
                id: id
            },
            data: {
                name: name,
                photo: photo,
                phone: phone,
                email: email,
                password: password,
                birthDate: birthDate,
                genre: genre,
                status: status,
                establishment: {
                    update: {
                        where: {
                              collaborator_id: id  
                        },
                        data:{
                            establishment_id: establishment_id,
                        }
                    }
                }
            }
        });

        return collaborator;
    }
}

export { EditCollaboratorService }