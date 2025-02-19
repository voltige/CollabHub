"use strict";
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
exports.updateSettings = exports.rejectContent = exports.approveContent = exports.fetchBusinesses = exports.fetchUsers = void 0;
const supabase_1 = require("../../lib/supabase");
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('users')
        .select('*');
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.fetchUsers = fetchUsers;
const fetchBusinesses = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('businesses')
        .select('*');
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.fetchBusinesses = fetchBusinesses;
const approveContent = (contentId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('content')
        .update({ status: 'approved' })
        .eq('id', contentId);
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.approveContent = approveContent;
const rejectContent = (contentId) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('content')
        .update({ status: 'rejected' })
        .eq('id', contentId);
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.rejectContent = rejectContent;
const updateSettings = (settings) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabase_1.supabase
        .from('settings')
        .upsert(settings);
    if (error) {
        throw new Error(error.message);
    }
    return data;
});
exports.updateSettings = updateSettings;
