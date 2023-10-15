import express, {Router} from 'express'
import { LinkzinGets } from '../controllers/LinkzinGets';
import { Linkzin } from '../controllers/Linkzin';
import { ConnectDB } from '../middlewares/DBconnection';

const router = Router();

const Gets = new LinkzinGets();
const Url = new Linkzin();

router.get('/', ConnectDB, Gets.home)
router.get("/invalid-url", Gets.invalidUrl)
router.get('/clicks', Gets.Clicks)
router.get('/:code',Url.shortnerUrl)
router.get('/:code/stats', Url.getStats)

router.post('/New',express.json(),  Url.newUrl)
router.post('/Clicks', express.urlencoded({extended:true}), Url.getClicks);

export default router;