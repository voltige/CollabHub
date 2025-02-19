"use strict";
// Ce fichier contient des fonctions utilitaires pour aider dans diverses tâches dans l'application.
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.capitalizeFirstLetter = exports.formatDate = void 0;
const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};
exports.formatDate = formatDate;
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
exports.debounce = debounce;
