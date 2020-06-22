import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages',(req: Request, res: Response)=>{
    res.json({
        ok: true,
        message: 'everything is ok'
    });
});

router.post('/messages',(req: Request, res: Response)=>{
    const content = req.body.content;
    const of = req.body.of;
    res.json({
        ok: true,
        content, 
        of
    });
});

router.post('/messages/:id',(req: Request, res: Response)=>{
    const content = req.body.content;
    const of = req.body.of;
    const id = req.params.id;
    res.json({
        ok: true,
        content, 
        of, 
        id
    });
});

export default router;