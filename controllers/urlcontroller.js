 import URL from '../models/url.js';
 import {nanoid} from "nanoid";// if named export then { }.
 
export async function createShortUrl(req,res){
    const longUrl=req.body.url;
    if(!longUrl){
         return res.status(400).json({error:"Url is required"})
    }
    const shortid = nanoid(7);
    await URL.create({
      shortUrl:shortid,// the shortid which we created
      longUrl:longUrl, // the bigurl which we get in req body
      visitHistory:[] // empty array for visit history
     });
     res.json({
    shortUrl: `${process.env.BASE_URL}/url/${shortid}`
     });
    }

    export async function getUrlByShortId(req,res){
        const shortId= req.params.shortid;
        const url=await URL.findOne({shortUrl:shortId});
        if(!url){
            return res.status(404).json({error:"Url not found"});
        }
        url.visitHistory.push({ timestamp: Date.now() });
        await url.save();
        return res.redirect(url.longUrl);

    





    }

