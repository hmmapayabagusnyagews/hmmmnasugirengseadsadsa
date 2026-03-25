
import { supabase } from './_lib/supabase.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
    
    const { data, error } = await supabase
        .from('victims')
        .select('*')
        .order('last_seen', { ascending: false });
    
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
}
