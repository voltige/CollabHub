"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const adminStore_1 = require("../store/adminStore");
const Businesses = () => {
    const { businesses, loading, error } = (0, adminStore_1.useAdminStore)(state => ({
        businesses: state.businesses,
        loading: state.loading,
        error: state.error,
    }));
    if (loading)
        return react_1.default.createElement("div", null, "Loading...");
    if (error)
        return react_1.default.createElement("div", null,
            "Error loading businesses: ",
            error.message);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Liste des entreprises"),
        react_1.default.createElement("ul", null, businesses.map(business => (react_1.default.createElement("li", { key: business.id }, business.name))))));
};
exports.default = Businesses;
