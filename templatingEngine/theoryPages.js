import { constructPage, readPage } from "./templatingEngine.js";

export const js = readPage('public/pages/theory/js.html');

export const jsPage = constructPage(js, {
    tabTitle: "JS",
    headerTitle: "Javascript Theory"
});