import { Router } from 'express';

const router = Router();


import { npmPage } from '../../templatingEngine/toolPages.js';

router.get('/npm', (req, res) => {
    res.send(npmPage);
});

export default router;