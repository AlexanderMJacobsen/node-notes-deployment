import express from 'express';
const app = express();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import pagesRouter from './public/routers/pagesRouter.js'
app.use(pagesRouter);

//
// Dir Routing
//

addStaticRoutes(path.resolve(__dirname, "public"));
addStaticRoutes(path.resolve(__dirname, "templatingEngine"));

function addStaticRoutes(dir, baseUrl = "") {
    
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach((file) => {

        const fullPath = path.join(dir, file.name);
        const routePath = path.join(baseUrl, file.name).replace(/\\/g, "/");

        if (file.isDirectory()) {
            addStaticRoutes(fullPath, routePath);
        } else {
            app.get(`/${routePath}`, (req, res) => {
                res.sendFile(fullPath);
            });
        }
    });
}

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server: ", error);
        return;
    }
    console.log('Server is running on port: ', server.address().port);
});


export default app;