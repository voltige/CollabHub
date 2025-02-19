"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const UserManagement = () => {
    const [users, setUsers] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch('/api/admin/users'); // Remplacez par votre endpoint API
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des utilisateurs');
                }
                const data = yield response.json();
                setUsers(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        });
        fetchUsers();
    }, []);
    const handleAddUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
        // Logique pour ajouter un utilisateur
    });
    const handleEditUser = (userId, updatedUser) => __awaiter(void 0, void 0, void 0, function* () {
        // Logique pour modifier un utilisateur
    });
    const handleDeleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        // Logique pour supprimer un utilisateur
    });
    if (loading)
        return react_1.default.createElement("div", null, "Chargement...");
    if (error)
        return react_1.default.createElement("div", null,
            "Erreur: ",
            error);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Gestion des utilisateurs"),
        react_1.default.createElement("button", { onClick: () => handleAddUser({ /* détails de l'utilisateur */}) }, "Ajouter un utilisateur"),
        react_1.default.createElement("ul", null, users.map(user => (react_1.default.createElement("li", { key: user.id },
            user.name,
            react_1.default.createElement("button", { onClick: () => handleEditUser(user.id, { /* détails mis à jour */}) }, "Modifier"),
            react_1.default.createElement("button", { onClick: () => handleDeleteUser(user.id) }, "Supprimer")))))));
};
exports.default = UserManagement;
