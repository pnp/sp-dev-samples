import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import HomeRoutes from './routes/home';

class SPWebHook {
    private app: express.Application;

    constructor() {
        // Create express application
        this.app = express();
        // Do some express configuration
        this.config();
        // Configure routes
        this.routes();
        // Start the server
        this.start();
    }

    private config(): void {
        // Mount json form parser
        this.app.use(bodyParser.json());
        // Mount query string parser
        this.app.use(bodyParser.urlencoded({ extended: true }));
        // Add static paths
        this.app.use(express.static(path.join(__dirname, "../public")));
    }

    private routes(): void {
        // Create routes
        let home: HomeRoutes = new HomeRoutes();
        // Home routes
        this.app.use('/', home.routes());
    }

    private start(): void {
        const isProduction = process.env.NODE_ENV === 'production';
        const port = isProduction ? process.env.PORT : 3000;
        const siteUrl = isProduction ? "https://production-url" : "http://localhost";

        this.app.listen(port, (error: express.Errback) => {
            if (error) {
                return console.log('ERROR:', error);
            }

            console.log(`Server running: ${siteUrl}:${port}`);
        });
    }
}

const spWebHook = new SPWebHook();