"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContentModeration = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Mod\u00E9ration de Contenu"),
        react_1.default.createElement("p", null, "Cette section permet aux administrateurs de mod\u00E9rer le contenu soumis par les utilisateurs.")));
};
exports.default = ContentModeration;
