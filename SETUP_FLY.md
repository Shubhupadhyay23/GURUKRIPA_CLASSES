# Deploy GURUKRIPA CLASSES to Fly.dev

This guide will get your app live in 5 minutes!

## Step 1: Get Supabase Credentials (2 min)

1. Go to https://supabase.com/dashboard
2. Click your project
3. Go to **Settings** → **API** (left sidebar)
4. Copy these two values:
   - **Project URL** (example: `https://abcdef123.supabase.co`)
   - **Anon Public** key (long string starting with `eyJ...`)

⚠️ **Keep these values safe - you'll need them next**

---

## Step 2: Install Flyctl (1 min)

If you don't have Fly CLI installed:

```bash
# macOS
brew install flyctl

# Linux/Windows
curl -L https://fly.io/install.sh | sh
```

Verify:
```bash
flyctl version
```

---

## Step 3: Push Code to GitHub (30 sec)

```bash
git add .
git commit -m "Add SPA configuration and Dockerfile"
git push origin main
```

---

## Step 4: Deploy & Set Secrets (2 min)

### Option A: Using Fly CLI (Easiest)

```bash
# Login to Fly.dev (opens browser)
flyctl auth login

# Set Supabase credentials (replace with YOUR values)
flyctl secrets set \
  VITE_SUPABASE_URL="https://your-project.supabase.co" \
  VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# Deploy
flyctl deploy
```

### Option B: Using Fly Dashboard

1. Go to https://fly.io/dashboard
2. Select your app (gurukripa-classes)
3. Click **Secrets** in sidebar
4. Click **New Secret**
5. Add both:
   - Name: `VITE_SUPABASE_URL` → Value: your Project URL
   - Name: `VITE_SUPABASE_ANON_KEY` → Value: your Anon Key
6. Wait for auto-deploy (2-3 min)

---

## Step 5: Test Your App ✅

1. Wait for deployment to complete
2. Go to your Fly.dev URL
3. Fill out the contact form
4. Check Supabase to see the submission:
   - Go to https://supabase.com/dashboard
   - Select your project
   - Click **Table Editor**
   - Select **inquiries** table
   - You should see your submission! ✅

---

## Troubleshooting

### "Supabase not configured" error
- ✅ Did you set both VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY?
- ✅ Did you redeploy after setting secrets? (`flyctl deploy`)
- ✅ Wait 2-3 minutes after setting secrets

### 404 error on routes
- ✅ This is fixed! Server now serves SPA properly
- ✅ Refresh the page if you see 404

### Slow deployment
- ✅ First deploy takes 3-5 minutes (normal)
- ✅ Subsequent deploys are faster

---

## Quick Reference Commands

```bash
# View deployment logs
flyctl logs

# Set a single secret
flyctl secrets set VITE_SUPABASE_URL="your-url"

# View all secrets (hidden values)
flyctl secrets list

# Redeploy after changes
flyctl deploy

# Check app status
flyctl status
```

---

## What Just Happened?

✅ **Dockerfile** - Tells Fly how to build your app  
✅ **fly.toml** - Configuration for Fly.dev  
✅ **server/index.ts** - Updated to serve SPA properly  
✅ **Environment variables** - Securely stored on Fly.dev  

Your app is now production-ready! 🚀
