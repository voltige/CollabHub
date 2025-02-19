import { supabase } from '../../lib/supabase';

export const fetchUsers = async () => {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const fetchBusinesses = async () => {
    const { data, error } = await supabase
        .from('businesses')
        .select('*');

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const approveContent = async (contentId) => {
    const { data, error } = await supabase
        .from('content')
        .update({ status: 'approved' })
        .eq('id', contentId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const rejectContent = async (contentId) => {
    const { data, error } = await supabase
        .from('content')
        .update({ status: 'rejected' })
        .eq('id', contentId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

export const updateSettings = async (settings) => {
    const { data, error } = await supabase
        .from('settings')
        .upsert(settings);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};