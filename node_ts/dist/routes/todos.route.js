"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controller_1 = require("../controllers/todos.controller");
const router = (0, express_1.Router)();
router.post('/', todos_controller_1.createTodo);
router.get('/', todos_controller_1.getTodos);
router.patch('/:id', todos_controller_1.updateTodo);
router.delete('/:id', todos_controller_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=todos.route.js.map