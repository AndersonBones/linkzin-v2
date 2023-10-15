import { Request, Response, NextFunction } from "express";
import LinkzinModel from "../model/LinkzinModel";
import { Services } from "../services/Services";
import dotenv from 'dotenv';

dotenv.config();

export class Linkzin {

    public constructor(){}

    public newUrl = async(req:Request, res:Response)=>{ // cria um novo link encurtado 
        let code = new Services().GenerateCode() as string; // gera um código aleatório 
        let click = 0; // contador de cliques
        
        
        let data = await new LinkzinModel({ // objeto URL
            code, // código
            url:req.body.originalUrl, // 
            click // quantidade de cliques
        })
    
        try {
            let url = new URL(req.body.originalUrl)
            let shortnerUrl = `${process.env.DOMAIN}${code}`; // cria a url encurtada
            let newUrl = data.save(); // salva os dados no banco
            
            res.status(201).json({shortnerUrl, url, click, code})
            
          } catch(err:any) {
            res.status(400).json({erro:err.message})
          }
    }

    public shortnerUrl = async(req:Request, res:Response, next:NextFunction)=>{
        let code = req.params.code;
    
        try {
            let doc = await LinkzinModel.findOneAndUpdate({code}, {$inc:{click:1}}) // incrimenta em 1 a contagem dos cliques 
    
            if(doc){ // redireciona o usuário para o link encurtado
                res.redirect(doc.url);
            }
            else{ 
                res.status(404).render('pages/404') // redireciona para a página de erro caso nâo encontre o codigo no banco de dados
            }
            
        } catch (error) {
            res.status(404).render('pages/404')
        }
    }

    public getStats = async(req:Request, res:Response)=>{
        let code = req.params.code;
    
        try {
            let doc = await LinkzinModel.findOne({code})
    
            if(doc){
                res.render('pages/stats', {click: doc.click})
            }
            else{
                res.status(404).render('pages/404')
            }
            
        } catch (error) {
            res.status(404).render('pages/404', {error}) 
        }
    }

    public getClicks = async(req:Request, res:Response)=>{
        let code = req.body.shortnerUrl.slice(process.env.DOMAIN?.length as number) as string;
        try {
            let doc = await LinkzinModel.findOne({code})
    
            if(doc){
                res.redirect(`/${code}/stats`)
                            
            }else{
                res.status(404).render('pages/404')
            }
        } catch (error) {
            res.status(404).render('pages/404', {error, body:req.body})
        }
    
    }
}




