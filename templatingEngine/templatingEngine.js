import fs from 'fs';

export function constructPage(page, options = {}) {
    const header = readPage('public/components/footer.html');
    const footer = readPage('public/components/header.html');

    return header
    + page
    + footer;

}

export function readPage(path) {
    return fs.readFileSync(path, 'utf-8');
}