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

export const indexPage = constructPage(index, {
    tabTitle: "Home",
    headerTitle: "Welcome :D"
});

export const toolsPage = constructPage(tools, {
    tabTitle: "Tools",
    headerTitle: "Tool Page"
});
export const theoryPage = constructPage(theory, {
    tabTitle: "Theory",
    headerTitle: "Theory Page"
});

export const terminalPage = constructPage(terminal, {
    tabTitle: "Terminal Commands",
    headerTitle: "Terminal Page"
});


