"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/", (_req, res) => {
    res.send("clientes");
});
exports.default = route;
//# sourceMappingURL=clients.routes.js.map