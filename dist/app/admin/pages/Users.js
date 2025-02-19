"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UserManagement_1 = __importDefault(require("../components/UserManagement"));
const Users = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Gestion des Utilisateurs"),
        react_1.default.createElement(UserManagement_1.default, null)));
};
exports.default = Users;
