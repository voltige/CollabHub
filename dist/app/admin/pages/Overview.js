"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Dashboard_1 = __importDefault(require("../components/Dashboard"));
const UserManagement_1 = __importDefault(require("../components/UserManagement"));
const BusinessManagement_1 = __importDefault(require("../components/BusinessManagement"));
const ContentModeration_1 = __importDefault(require("../components/ContentModeration"));
const Settings_1 = __importDefault(require("../components/Settings"));
const Overview = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Aper\u00E7u du tableau de bord"),
        react_1.default.createElement(Dashboard_1.default, null),
        react_1.default.createElement(UserManagement_1.default, null),
        react_1.default.createElement(BusinessManagement_1.default, null),
        react_1.default.createElement(ContentModeration_1.default, null),
        react_1.default.createElement(Settings_1.default, null)));
};
exports.default = Overview;
