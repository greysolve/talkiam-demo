# Environment Variables Setup

## Local Development

1. Create a `.env` file in the root directory with the following variables:

```env
SUPABASE_URL=https://uieggrikbpmcwoncyntq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpZWdncmlrYnBtY3dvbmN5bnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNTA2NzYsImV4cCI6MjA2OTcyNjY3Nn0.frkEQ4TxNMyIENPp91aUjkTo1Fz2R4ZJXuSCxI0iKPY
BACKEND_URL=https://app.greysolve.com/webhook/ui-chat
API_KEY=a4401ade008b4824d0caabe34249b98acb84ddbdda743171f0d68f2a8f79bcd1
```

2. The `.env` file is already in `.gitignore` and won't be committed to git.

## Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `BACKEND_URL`
   - `API_KEY`

4. Deploy your project - Vercel will automatically use these environment variables.

## How It Works

- **`api/config.js`**: Serverless function that returns client-safe configuration (excludes API_KEY)
- **`api/chat.js`**: Serverless function that proxies chat requests and adds the API_KEY server-side
- **`index.html`**: Fetches config from `/api/config` and uses `/api/chat` for chat requests

This setup ensures:
- ✅ No hardcoded credentials in client-side code
- ✅ API_KEY stays server-side only
- ✅ Easy to manage different environments (dev/staging/prod)
- ✅ Secure and maintainable
