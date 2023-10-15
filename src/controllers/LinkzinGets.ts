import { Request, Response, NextFunction } from "express"

export class LinkzinGets{

    public constructor(){}
    
    public home = async (req:Request, res:Response) => {
        res.render('pages/home')
    }


    public Clicks =(req:Request, res:Response)=>{
        res.render('pages/clicks')
    }


    public invalidUrl = (req:Request, res:Response) =>{
        res.render('pages/invalidUrl')
    }

}

