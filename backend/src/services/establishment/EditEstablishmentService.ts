import prismaClient from "../../prisma";

interface EstablishmentRequest{
    id: string;
    name: string;
    photo: string;
    cover: string;
    email: string;
}

class EditEstablishmentService{
    async execute({id, name, photo, cover, email}: EstablishmentRequest){

        const establishment = await prismaClient.establishment.update({
            where:{
                id: id
            },
            data:{
                name: name,
                photo: photo,
                cover: cover,
                email: email,
            }
        });

        return establishment;

    }

}

export {EditEstablishmentService}