# 🚀 START HERE - What To Do Now

## Follow These 7 Simple Steps:

---

## 📦 STEP 1: Install New Package

**Open terminal in `backend` folder and type:**
```
npm install
```

**Wait for it to finish.** You should see "added X packages" message.

---

## 📝 STEP 2: Create .env File

**In the `backend` folder, create a new file named exactly: `.env`**

**Copy and paste this into the file:**

```env
MONGO_URI=mongodb://localhost:27017/manav-seva
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**⚠️ IMPORTANT:** Replace:
- `your-email@gmail.com` → Your actual Gmail
- `your-app-password-here` → Your Gmail App Password (see Step 3)

---

## 🔐 STEP 3: Get Gmail App Password

**You need a special password for Gmail:**

1. **Go to:** https://myaccount.google.com/apppasswords
2. **If asked, enable 2-Step Verification first**
3. **Select:** "Mail" → "Other" → Type "Backend"
4. **Click:** "Generate"
5. **Copy** the 16-character password (no spaces)
6. **Paste** it in your `.env` file as `EMAIL_PASS`

**Example:** `EMAIL_PASS=abcd efgh ijkl mnop` → `EMAIL_PASS=abcdefghijklmnop`

---

## 🗄️ STEP 4: Set Up MongoDB

### Option A: Using Local MongoDB
- Make sure MongoDB is installed and running
- Your `.env` already has: `MONGO_URI=mongodb://localhost:27017/manav-seva`
- **Done!** ✅

### Option B: Using MongoDB Atlas (Cloud - Free)
1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up (free account)
3. Create a cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Add `/manav-seva` at the end
8. Update `MONGO_URI` in your `.env` file

**Example:** `MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/manav-seva`

---

## 📁 STEP 5: Move Receipt Files

**You have receipts in two places. Move them all to one place:**

1. **Open:** `backend/receipts/` folder
2. **Find:** `receipt-MSC-2026-802835.pdf`
3. **Cut** this file
4. **Paste** it into `backend/public/receipts/` folder

**Now all receipts should be in:** `backend/public/receipts/`

---

## ▶️ STEP 6: Start Your Server

**In terminal (still in `backend` folder), type:**
```
npm start
```

**You should see:**
```
✅ MongoDB connected
Backend server running on http://localhost:5000
Environment: development
```

**✅ If you see this, your server is running!**

**❌ If you see errors:**
- "Missing required environment variables" → Check your `.env` file
- "MongoDB error" → Check your MongoDB connection
- "Cannot find module" → Run `npm install` again

---

## 🧪 STEP 7: Test It Works

**Open your browser and go to:**
```
http://localhost:5000/health
```

**You should see:**
```json
{
  "status": "healthy",
  "database": "connected"
}
```

**✅ If you see this, everything is working!**

---

## 🎉 You're Done!

Your backend is now:
- ✅ Secure
- ✅ Validated
- ✅ Production-ready
- ✅ Running successfully

---

## 📚 Need More Details?

- **Detailed guide:** See `STEP_BY_STEP_GUIDE.md`
- **What changed:** See `IMPROVEMENTS_MADE.md`
- **Full review:** See `DEPLOYMENT_REVIEW.md`

---

## 🆘 Having Problems?

**Common issues:**

1. **"Missing environment variables"**
   → Check your `.env` file exists and has all values

2. **"MongoDB connection error"**
   → Check MongoDB is running (local) or connection string is correct (Atlas)

3. **"Email sending failed"**
   → Check Gmail App Password is correct (16 characters, no spaces)

4. **"Cannot find module helmet"**
   → Run `npm install` again

---

**Good luck! 🚀**

