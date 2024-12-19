"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const db_1 = require("./db/db");
const app_1 = require("./app");
let server;
(0, db_1.connectDB)()
    .then(() => {
    server = app_1.app.listen(config_1.config.PORT, () => {
        console.log(`☑️ Server is running at port : ${config_1.config.PORT}`);
    });
})
    .catch((error) => console.log('❗MONGODB connection failed!!! ', error));
process.on('unhandledRejection', () => {
    console.log('❗Unhandled Rejection at:', new Date().toISOString());
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on('uncaughtException', () => {
    console.log('❗UncaughtException at:', new Date().toISOString());
    process.exit(1);
});
