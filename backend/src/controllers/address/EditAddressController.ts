import { Request, Response } from "express"
import { EditAddressService } from "../../services/address/EditAddressService";

class EditAddressController{

    async handle(req: Request, res: Response){

        const {id, city, uf, cep, number, country} = req.body;

        const editAddressService = new EditAddressService();

        const address = await editAddressService.execute({
            id, 
            city, 
            uf, 
            cep, 
            number, 
            country
        });

        return res.json(address);
    }
}

export {EditAddressController}