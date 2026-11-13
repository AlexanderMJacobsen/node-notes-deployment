import { Router } from 'express';

const router = Router();


import { jsPage } from '../../templatingEngine/pages.js';

router.get('/js', (req, res) => {
    res.send(jsPage);
});

export default router;