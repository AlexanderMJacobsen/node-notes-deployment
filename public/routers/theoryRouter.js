import { Router } from 'express';

const router = Router();


import { jsPage } from '../../templatingEngine/theoryPages.js';

router.get('/js', (req, res) => {
    res.send(jsPage);
});

export default router;