import { Router } from 'express';

const router = Router();


import { indexPage } from '../../templatingEngine/pages.js';

// Pages

router.get('/', (req, res) => {
    res.send(indexPage);
});

router.get('/tools', (req, res) => {
    res.send(indexPage);
});



export default router;