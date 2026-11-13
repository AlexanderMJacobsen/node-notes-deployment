import { constructPage, readPage } from "./templatingEngine.js";

//////
// READ PAGES
//////

export const index = readPage('public/pages/index/index.html');

export const tools = readPage('public/pages/tools/tools.html');

export const theory = readPage('public/pages/theory/theory.html');

export const terminal = readPage('public/pages/terminal/terminal.html');

export const introduction = readPage('public/pages/class-work/introduction.html');

export const js = readPage('public/pages/theory/js.html');

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

export const introductionPage = constructPage(introduction, {
    tabTitle: "Introduction",
    headerTitle: "Introduction Page"
});

export const jsPage = constructPage(js, {
    tabTitle: "JS",
    headerTitle: "Javascript Theory"
});