import fs from 'fs';

export function constructPage(page, options = {}) {
    const header = readPage('public/components/header/header.html');
    const footer = readPage('public/components/footer/footer.html');

    return header
        .replace('{{TAB_TITLE}}', options.tabTitle || "Not_Found")
        .replace('{{HEADER_TITLE}}', options.headerTitle || "Not_Found")
        + page
        + footer;

}

export function readPage(path) {
    return fs.readFileSync(path, 'utf-8');
}