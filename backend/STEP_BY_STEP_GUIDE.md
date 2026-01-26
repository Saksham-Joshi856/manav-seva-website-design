# Step-by-Step Setup Guide

Follow these steps **IN ORDER** to set up your backend properly.

---

## 📋 STEP 1: Install New Dependencies

Open terminal/command prompt in the `backend` folder and run:

```bash
cd backend
npm install
```

**What this does:** Installs the `helmet` package (security headers) that we added.

**Expected output:** Should show "added 1 package" or similar.

**✅ Check:** Make sure you see `helmet` in the output.

---

## 📋 STEP 2: Create Environment Variables File

### 2.1 Create `.env` file

In the `backend` folder, create a new file named `.env` (exactly this name, no extension).

**Windows:**
- Right-click in backend folder → New → Text Document
- Name it `.env` (remove .txt extension)
- If Windows asks about changing extension, click "Yes"

**Mac/Linux:**
```bash
touch .env
```

### 2.2 Add Your Configuration

Open the `.env` file and add these lines (replace with YOUR actual values):

```env
# MongoDB Database Connection
MONGO_URI=mongodb://localhost:27017/manav-seva

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS - where your website is)
FRONTEND_URL=http://localhost:5173
```

**⚠️ IMPORTANT:** Replace these values:
- `MONGO_URI` - Your MongoDB connection string
- `EMAIL_USER` - Your Gmail address
- `EMAIL_PASS` - Your Gmail App Password (see Step 3)
- `FRONTEND_URL` - Your frontend URL (if different)

**✅ Check:** Save the file and make sure it's in the `backend` folder.

---

## 📋 STEP 3: Set Up Gmail App Password

### 3.1 Enable 2-Step Verification
1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled

### 3.2 Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Type "Manav Seva Backend"
4. Click "Generate"
5. Copy the 16-character password (no spaces)
6. Paste it in your `.env` file as `EMAIL_PASS`

**✅ Check:** Your `.env` file should have a 16-character password (no spaces).

---

## 📋 STEP 4: Set Up MongoDB

### Option A: Local MongoDB (if installed locally)
- Your `.env` should have: `MONGO_URI=mongodb://localhost:27017/manav-seva`
- Make sure MongoDB is running on your computer

### Option B: MongoDB Atlas (Cloud - Recommended)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up/Login
3. Create a free cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Replace `<password>` with your database password
7. Add database name at the end: `/manav-seva`
8. Update `MONGO_URI` in your `.env` file

**✅ Check:** Your MongoDB connection string is in `.env` file.

---

## 📋 STEP 5: Move Old Receipts (Important!)

You have receipts in two places. We need to move them all to `public/receipts/`.

### 5.1 Check Current Receipts
- Old location: `backend/receipts/` (1 file)
- New location: `backend/public/receipts/` (7 files)

### 5.2 Move the Receipt
Move `receipt-MSC-2026-802835.pdf` from `backend/receipts/` to `backend/public/receipts/`

**Windows:** Cut and paste the file
**Mac/Linux:**
```bash
mv receipts/receipt-MSC-2026-802835.pdf public/receipts/
```

**✅ Check:** All receipts should now be in `backend/public/receipts/` folder.

---

## 📋 STEP 6: Test the Server

### 6.1 Start the Server

In terminal, from the `backend` folder:

```bash
npm start
```

**Expected output:**
```
✅ MongoDB connected
Backend server running on http://localhost:5000
Environment: development
```

**❌ If you see errors:**
- "Missing required environment variables" → Check your `.env` file
- "MongoDB error" → Check your `MONGO_URI` in `.env`
- "Cannot find module 'helmet'" → Run `npm install` again

**✅ Check:** Server starts without errors.

### 6.2 Test Health Endpoint

Open browser or use Postman/curl:
```
http://localhost:5000/health
```

**Expected response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-01-XX...",
  "uptime": 5.123,
  "database": "connected"
}
```

**✅ Check:** Health endpoint returns "healthy" and "connected".

---

## 📋 STEP 7: Test Donation Endpoint

### 7.1 Test with Valid Data

Use Postman, curl, or your frontend to test:

**POST** `http://localhost:5000/api/donate`

**Body (JSON):**
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "amount": 100,
  "utr": "TEST123456789"
}
```

**Expected response:**
```json
{
  "success": true,
  "message": "Donation successful. Receipt sent via email.",
  "data": {
    "receiptNo": "MSC-2026-XXXXXX",
    "name": "Test User",
    "email": "test@example.com",
    "amount": 100,
    "date": "2026-01-XX..."
  }
}
```

**✅ Check:** 
- Donation is created successfully
- Receipt PDF is generated in `public/receipts/`
- Email is sent (check test@example.com inbox)

### 7.2 Test with Invalid Data

Test error handling:

**Test 1 - Invalid Email:**
```json
{
  "name": "Test",
  "email": "invalid-email",
  "amount": 100,
  "utr": "TEST123"
}
```
**Expected:** Error message about invalid email

**Test 2 - Negative Amount:**
```json
{
  "name": "Test",
  "email": "test@example.com",
  "amount": -100,
  "utr": "TEST123"
}
```
**Expected:** Error message about positive number

**✅ Check:** All validation errors work correctly.

---

## 📋 STEP 8: Test Receipt Download

### 8.1 Get Receipt Number
From Step 7.1, copy the `receiptNo` from the response.

### 8.2 Download Receipt

**GET** `http://localhost:5000/api/receipt/MSC-2026-XXXXXX`

(Replace with your actual receipt number)

**Expected:** PDF file downloads

**✅ Check:** Receipt PDF downloads successfully.

---

## 📋 STEP 9: Update Frontend URL (For Production)

When deploying to production, update your `.env`:

```env
NODE_ENV=production
FRONTEND_URL=https://your-actual-website.com
```

**✅ Check:** Frontend URL matches your actual website domain.

---

## 📋 STEP 10: Final Checklist

Before deploying, verify:

- [ ] ✅ `npm install` completed successfully
- [ ] ✅ `.env` file created with all required values
- [ ] ✅ Gmail App Password generated and added
- [ ] ✅ MongoDB connection working
- [ ] ✅ All receipts moved to `public/receipts/`
- [ ] ✅ Server starts without errors
- [ ] ✅ Health endpoint returns "healthy"
- [ ] ✅ Donation creation works
- [ ] ✅ Email sending works
- [ ] ✅ Receipt download works
- [ ] ✅ Validation errors work correctly
- [ ] ✅ Frontend URL updated for production

---

## 🚨 Common Issues & Solutions

### Issue: "Missing required environment variables"
**Solution:** Check your `.env` file has all required variables

### Issue: "MongoDB connection error"
**Solution:** 
- Check MongoDB is running (if local)
- Check connection string is correct
- Check internet connection (if using Atlas)

### Issue: "Email sending failed"
**Solution:**
- Verify Gmail App Password is correct (16 characters, no spaces)
- Check 2-Step Verification is enabled
- Try generating a new App Password

### Issue: "Receipt not found"
**Solution:** Make sure receipt is in `public/receipts/` folder

### Issue: "CORS error" in frontend
**Solution:** Update `FRONTEND_URL` in `.env` to match your frontend URL

---

## 📞 Need Help?

If you get stuck at any step:
1. Check the error message carefully
2. Verify all `.env` values are correct
3. Make sure all dependencies are installed
4. Check MongoDB and email configurations

---

**Good luck! 🚀**

