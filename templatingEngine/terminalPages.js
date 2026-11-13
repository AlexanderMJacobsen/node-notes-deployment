import { constructPage, readPage } from "./templatingEngine.js";

export const git = readPage('public/pages/terminal/git.html');

export const gitPage = constructPage(git, {
    tabTitle: "Git",
    headerTitle: "Git Commands"
});