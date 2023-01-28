import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    //receber o token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");
    
    try {
        // validar token
        const { sub } = verify(
            token,
            process.env.SECRET_JWT
        ) as PayLoad;

        //criada variavel do tipo Request dentro da pasta @types/express para que possa ser acessada em todo lugar
        //req.user_id = sub;

        //console.log(sub);

        return next();
        
    } catch (error) {
        return res.status(401).end();
    }
}