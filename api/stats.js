
import { supabase } from './_lib/supabase.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();
    
    const { data, error } = await supabase.rpc('get_victim_stats');
    
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
}
