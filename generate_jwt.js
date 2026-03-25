
import { createClient } from '@supabase/supabase-js';
import jwt from 'jsonwebtoken';

const SUPABASE_URL = 'https://cugwntuxnsupdtivezdl.supabase.co';
const JWT_SECRET = 'QuantumV14.0RianModssSuperSecret2024';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    
    const { device_id } = req.body;
    
    const token = jwt.sign(
        { sub: device_id, role: 'authenticated', exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60 },
        JWT_SECRET,
        { algorithm: 'HS256' }
    );
    
    res.json({ token, device_id });
}
