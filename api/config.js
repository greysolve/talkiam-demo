export default function handler(req, res) {
  // Return only client-safe config
  res.json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    backendUrl: process.env.BACKEND_URL,
    // Note: API_KEY should be used server-side only
  });
}
