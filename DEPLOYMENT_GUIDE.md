# GURUKRIPA CLASSES - Deployment Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Free Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Sign Up" → Create free account
3. Click "New Project"
   - Project Name: `gurukripa-classes`
   - Select a region closest to you
   - Create a strong password
4. Wait for project to initialize (~1 minute)

### Step 2: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New Query" and paste this:

```sql
-- Create inquiries table
CREATE TABLE inquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  program VARCHAR(100) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create enrollments table
CREATE TABLE enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  program VARCHAR(100) NOT NULL,
  enrollment_date TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS for security
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Allow public insert on inquiries"
ON inquiries FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public insert on enrollments"
ON enrollments FOR INSERT
WITH CHECK (true);
```

3. Click "Run" and wait for success message

### Step 3: Get Your Supabase Credentials

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy:
   - **Project URL** (under "Project URL")
   - **Anon Public** key (under "Project API keys")

### Step 4: Set Environment Variables Locally

1. Create `.env.local` file in project root:

```
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Replace with your actual values from Step 3

### Step 5: Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` and test the contact form. Data should appear in Supabase.

### Step 6: Deploy to Vercel (FREE)

#### Option A: GitHub Integration (Recommended)

1. Push your code to GitHub:

   ```bash
   git add .
   git commit -m "Add Supabase integration"
   git push origin main
   ```

2. Go to [https://vercel.com](https://vercel.com)
3. Sign up (free) → "Import Project"
4. Select your GitHub repository
5. In "Environment Variables", add:
   - `VITE_SUPABASE_URL` = (your Supabase URL)
   - `VITE_SUPABASE_ANON_KEY` = (your Anon Key)
6. Click "Deploy" → Wait ~2 minutes
7. Your site is live! 🎉

#### Option B: Vercel CLI (Alternative)

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:

   ```bash
   vercel
   ```

3. Follow prompts and enter environment variables when asked
4. Done!

---

## 📊 Database Structure

### Inquiries Table

- `id`: Unique identifier
- `name`: Student name
- `email`: Student email
- `phone`: Student phone
- `program`: Selected program (RAS, REET, CET, PSI, 1st & 2nd Grade)
- `message`: Optional message
- `created_at`: When submitted

### Enrollments Table

- `id`: Unique identifier
- `name`: Student name
- `email`: Student email
- `phone`: Student phone
- `program`: Enrolled program
- `enrollment_date`: When enrolled
- `status`: Enrollment status (active, inactive, etc.)
- `created_at`: Created timestamp

---

## 🔧 How It Works

1. **Contact Form** → User submits form on homepage
2. **Supabase Integration** → Data sent to `supabase/supabase.ts`
3. **Database** → Stored in `inquiries` table
4. **Success Message** → User sees confirmation

---

## 🔐 Security Notes

- Anon Key is safe to expose (read-only by design with RLS policies)
- RLS (Row Level Security) policies control access
- Only allow INSERT for public users (no SELECT/UPDATE/DELETE)

---

## 📱 Monitor Submissions

1. Go to Supabase dashboard
2. Click **"Table Editor"**
3. Select **"inquiries"** or **"enrollments"**
4. View all submissions in real-time

---

## 🆘 Troubleshooting

**Form not submitting?**

- Check browser console (F12) for errors
- Verify Supabase credentials in `.env.local`
- Ensure RLS policies are enabled

**Vercel deployment failing?**

- Check environment variables are set correctly
- Look at Vercel deployment logs
- Make sure `.env.local` is in `.gitignore` (don't commit it)

**Can't see data in Supabase?**

- Refresh the table editor
- Check RLS policies allow INSERT
- Verify table names match exactly

---

## 🎯 Next Steps

After deployment:

1. Test the live form at your Vercel URL
2. Monitor submissions in Supabase dashboard
3. Add email notifications (Supabase integrations)
4. Create admin dashboard to view submissions

---

**Questions?** Check Supabase docs: [https://supabase.com/docs](https://supabase.com/docs)
