import { Router } from 'express';

const router = Router();


import { indexPage, terminalPage, theoryPage, toolsPage, introductionPage } from '../../templatingEngine/pages.js';

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

router.get('/terminal-commands', (req, res) => {
    res.send(terminalPage);
});


router.get('/introduction', (req, res) => {
    res.send(introductionPage);
});

export default router;