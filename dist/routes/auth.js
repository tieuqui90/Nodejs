"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
route.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('username', username);
    console.log('password', password);
    return res.status(200).json({
        success: true,
        token: ""
    });
});
exports.default = route;
//# sourceMappingURL=auth.js.map