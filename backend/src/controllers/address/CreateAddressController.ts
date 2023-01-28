import { Request, Response } from "express"
import { CreateAddressService } from "../../services/address/CreateAddressService"

class CreateAddressController{

    async handle(req: Request, res: Response){

        const {establishment_id, city, uf, cep, number, country} = req.body;

        const createAddressService = new CreateAddressService();

        const address = await createAddressService.execute({
            establishment_id, 
            city, 
            uf, 
            cep, 
            number, 
            country
        });

        return res.json(address);
    }
}

export {CreateAddressController}