"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { healthRouter, calculatorRouter } from './routes';
//import { addTimestamp, errorHandler, logger } from './middlewares';
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// app.use(addTimestamp);
// app.use(logger);
// app.use('/health', healthRouter);
// app.use('/calculator', calculatorRouter);
// app.use(errorHandler);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
