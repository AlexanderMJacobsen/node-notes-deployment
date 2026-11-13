import { constructPage, readPage } from "./templatingEngine.js";

//////
// READ PAGES
//////

export const index = readPage('public/pages/index/index.html');

export const tools = readPage('public/pages/tools/tools.html');

export const theory = readPage('public/pages/theory/theory.html');

export const terminal = readPage('public/pages/terminal/terminal.html');


//////
// CONSTRUCT PAGES
//////

export const indexPage = constructPage(index)

export const toolsPage = constructPage(tools)

export const theoryPage = constructPage(theory)

export const terminalPage = constructPage(terminal)
