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
exports.db = void 0;
const dotenv = __importStar(require("dotenv"));
const knex_1 = __importDefault(require("knex"));
dotenv.config();
exports.db = (0, knex_1.default)({
    client: 'mysql',
    connection: {
        host: process.env.DB_PERSON_HOST,
        port: parseInt(process.env.DB_PERSON_PORT, 10),
        user: process.env.DB_PERSON_USER,
        password: process.env.DB_PERSON_PASS,
        database: process.env.DB_PERSON_DB,
    },
    pool: {
        min: 0,
        max: 7
    }
});
