import { constructPage, readPage } from "./templatingEngine.js";

export const introduction = readPage('public/pages/class-work/introduction.html');


export const introductionPage = constructPage(introduction, {
    tabTitle: "Introduction",
    headerTitle: "Introduction Page"
});
