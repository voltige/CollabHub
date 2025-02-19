"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const types_1 = require("./types");
// État initial du store
const initialState = {
    dashboardData: null,
    users: [],
    businesses: [],
    content: [],
    settings: {},
};
// Réducteur pour gérer les actions du store d'administration
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.AdminActionTypes.SET_DASHBOARD_DATA:
            return Object.assign(Object.assign({}, state), { dashboardData: action.payload });
        case types_1.AdminActionTypes.SET_USERS:
            return Object.assign(Object.assign({}, state), { users: action.payload });
        case types_1.AdminActionTypes.SET_BUSINESSES:
            return Object.assign(Object.assign({}, state), { businesses: action.payload });
        case types_1.AdminActionTypes.SET_CONTENT:
            return Object.assign(Object.assign({}, state), { content: action.payload });
        case types_1.AdminActionTypes.SET_SETTINGS:
            return Object.assign(Object.assign({}, state), { settings: action.payload });
        default:
            return state;
    }
};
// Création du store
const adminStore = (0, redux_1.createStore)(adminReducer);
exports.default = adminStore;
