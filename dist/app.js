"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
console.log("env:", process.env.NODE_ENV);
require("dotenv").config({
    path: path_1.default.resolve(process.cwd(), '.env.development'),
});
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const auth_1 = __importDefault(require("./routes/auth"));
const connect = async () => {
    try {
        await (0, typeorm_1.createConnection)({
            type: "mssql",
            host: "rdp.icool.com.vn",
            port: 1434,
            username: "viethq",
            password: "123456",
            database: "icool_karaoke_v10",
            logging: true,
            synchronize: false
        });
        return true;
    }
    catch (err) {
        return false;
    }
    ;
};
connect()
    .then(() => {
    console.log("Kết nối thành công");
    const app = (0, express_1.default)();
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, cors_1.default)({
        origin: ["http://localhost:9000"],
        methods: ["GET", "POST", "PUT", "DELETE"]
    }));
    app.use('/api/auth', auth_1.default);
    console.log('env', process.env.PORT);
    const port = process.env.PORT || 9093;
    app.listen(port, () => {
        console.log(`server dag lang nghe ${port}`);
    });
})
    .catch(err => {
    console.log("Ket nơi that bai", err.messgas);
});
//# sourceMappingURL=app.js.map