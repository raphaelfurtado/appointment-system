import prismaClient from "../../prisma";

interface AddressRequest{
    establishment_id: string;
    city: string
    uf: string;
    cep: string;
    number: number;
    country: string;
}

class CreateAddressService{
    async execute({establishment_id, city, uf, cep, number, country}: AddressRequest){

        const addressAlreadyExists = await prismaClient.address.findFirst({
            where:{
                establishment_id: establishment_id
            }
        });

        if(addressAlreadyExists){
            throw new Error('This establishment Already exists registered.');
        }

        const address = await prismaClient.address.create({
            data:{
                city: city,
                uf: uf,
                cep: cep,
                number: number,
                country: country,
                establishment_id: establishment_id
            }
        });

        return address;
    }
}

export {CreateAddressService}