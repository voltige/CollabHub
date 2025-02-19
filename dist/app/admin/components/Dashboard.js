"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Dashboard = () => {
    // Simulated data for demonstration
    const stats = {
        totalUsers: 120,
        totalBusinesses: 45,
        totalContent: 300,
        activeSessions: 15,
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Tableau de bord"),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, "Statistiques cl\u00E9s"),
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    "Utilisateurs totaux: ",
                    stats.totalUsers),
                react_1.default.createElement("li", null,
                    "Entreprises totales: ",
                    stats.totalBusinesses),
                react_1.default.createElement("li", null,
                    "Contenu total: ",
                    stats.totalContent),
                react_1.default.createElement("li", null,
                    "Sessions actives: ",
                    stats.activeSessions))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, "Activit\u00E9 r\u00E9cente"),
            react_1.default.createElement("p", null, "Aucune activit\u00E9 r\u00E9cente \u00E0 afficher."))));
};
exports.default = Dashboard;
