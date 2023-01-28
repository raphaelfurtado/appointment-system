import multer from 'multer';
import { Router, Request, Response } from "express";
import { isAuthenticated } from "./middlewares/isAutheticated";
import uploadConfig from './config/multer';
import { CreateEstablishmentController } from './controllers/establishment/CreateEstablishmentController';
import { ListEstablishmentController } from './controllers/establishment/ListEstablishmentController';
import { ListEstablishmentByIdController } from './controllers/establishment/ListEstablishmentByIdController';
import { EditEstablishmentController } from './controllers/establishment/EditEstablishmentController';
import { CreateAddressController } from './controllers/address/CreateAddressController';
import { EditAddressController } from './controllers/address/EditAddressController';
import { CreateTypeServiceController } from './controllers/typeService/CreateTypeServiceController';
import { EditTypeServiceController } from './controllers/typeService/EditTypeServiceController';


const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTES ESTABLISHMENT
router.post('/establishment', new CreateEstablishmentController().handle);
router.get('/establishments', new ListEstablishmentController().handle);
router.get('/id/establishment', new ListEstablishmentByIdController().handle);
router.put('/id/establishment', new EditEstablishmentController().handle);

//ROTES ADDRESS
router.post('/address', new CreateAddressController().handle);
router.put('/id/address', new EditAddressController().handle);

//ROTES TYPES SERVICES
router.post('/typeService', new CreateTypeServiceController().handle);
router.put('/id/typeService', new EditTypeServiceController().handle);

export { router }