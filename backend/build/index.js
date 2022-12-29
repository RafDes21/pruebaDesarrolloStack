"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clients_routes_1 = __importDefault(require("./routes/clients.routes"));
const PORT = 8080;
const app = (0, express_1.default)();
app.use("/api", clients_routes_1.default);
app.listen(PORT, () => {
    console.log(`SERVER ON PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map