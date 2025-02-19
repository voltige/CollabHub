import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Les variables d\'environnement Supabase sont manquantes');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});

// Helper pour vérifier la connexion
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('users').select('count');
    if (error) throw error;
    console.log('Connexion Supabase réussie');
    return true;
  } catch (error) {
    console.error('Erreur de connexion Supabase:', error);
    return false;
  }
};