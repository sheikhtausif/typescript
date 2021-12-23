"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_route_1 = __importDefault(require("./routes/todos.route"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
// app.use(express.json());
app.use((0, body_parser_1.json)());
app.use('/todos', todos_route_1.default);
app.use((err, _, res, next) => {
    res.status(500).json({ message: err.message });
    next();
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=app.js.map