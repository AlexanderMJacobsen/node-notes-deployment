import { Router } from 'express';

const router = Router();


import { gitPage } from '../../templatingEngine/terminalPages.js';

router.get('/git', (req, res) => {
    res.send(gitPage);
});

export default router;