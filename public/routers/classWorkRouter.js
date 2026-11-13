import { Router } from 'express';

const router = Router();


import { introductionPage } from '../../templatingEngine/pages.js';

router.get('/introduction', (req, res) => {
    res.send(introductionPage);
});

export default router;