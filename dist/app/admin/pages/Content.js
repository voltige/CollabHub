"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Content = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Gestion du Contenu"),
        react_1.default.createElement("p", null, "Cette page permet aux administrateurs de g\u00E9rer le contenu soumis par les utilisateurs.")));
};
exports.default = Content;
