import { constructPage, readPage } from "./templatingEngine.js";

export const npm = readPage('public/pages/tools/npm.html');


export const npmPage = constructPage(npm, {
    tabTitle: "npm",
    headerTitle: "NPM Tools"
});
