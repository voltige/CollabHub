import { createStore } from 'redux';
import { AdminActionTypes, AdminState } from './types';

// État initial du store
const initialState: AdminState = {
    dashboardData: null,
    users: [],
    businesses: [],
    content: [],
    settings: {},
};

// Réducteur pour gérer les actions du store d'administration
const adminReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AdminActionTypes.SET_DASHBOARD_DATA:
            return { ...state, dashboardData: action.payload };
        case AdminActionTypes.SET_USERS:
            return { ...state, users: action.payload };
        case AdminActionTypes.SET_BUSINESSES:
            return { ...state, businesses: action.payload };
        case AdminActionTypes.SET_CONTENT:
            return { ...state, content: action.payload };
        case AdminActionTypes.SET_SETTINGS:
            return { ...state, settings: action.payload };
        default:
            return state;
    }
};

// Création du store
const adminStore = createStore(adminReducer);

export default adminStore;