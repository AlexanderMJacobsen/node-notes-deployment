import { Router } from 'express';

const router = Router();


import { indexPage, terminalPage, theoryPage, toolsPage } from '../../templatingEngine/pages.js';

// Pages

router.get('/', (req, res) => {
    res.send(indexPage);
});

router.get('/tools', (req, res) => {
    res.send(toolsPage);
});

router.get('/theory', (req, res) => {
    res.send(theoryPage);
});

router.get('/terminal', (req, res) => {
    res.send(terminalPage);
});



export default router;