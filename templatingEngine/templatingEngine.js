import fs from 'fs';

export function constructPage(page, options = {}) {
    const header = readPage('public/components/header.html');
    const footer = readPage('public/components/footer.html');

    return header
        + page
        + footer;

}

export function readPage(path) {
    return fs.readFileSync(path, 'utf-8');
}