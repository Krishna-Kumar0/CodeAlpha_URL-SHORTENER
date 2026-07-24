import express from 'express';
const router = express.Router();

import{createShortUrl,getUrlByShortId} from '../controllers/urlcontroller.js';

router.post('/url/shorten', createShortUrl);
router.get('/url/:shortid', getUrlByShortId);

export default router;



