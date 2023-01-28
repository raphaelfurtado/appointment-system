import prismaClient from "../../prisma";

interface AddressRequest{
    id: string;
    city: string
    uf: string;
    cep: string;
    number: number;
    country: string;
}

class EditAddressService{
    async execute({id, city, uf, cep, number, country}: AddressRequest){

        const address = await prismaClient.address.update({
            where:{
                id: id
            },
            data:{
                city: city,
                uf: uf,
                cep: cep,
                number: number,
                country: country,
            }
        });

        return address;
    }
}

export {EditAddressService}