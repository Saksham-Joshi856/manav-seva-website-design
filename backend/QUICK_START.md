# Quick Start Checklist ✅

## Do These Steps in Order:

### ✅ STEP 1: Install Dependencies
```bash
cd backend
npm install
```

### ✅ STEP 2: Create .env File
Create a file named `.env` in the `backend` folder with this content:

```env
MONGO_URI=mongodb://localhost:27017/manav-seva
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### ✅ STEP 3: Get Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Generate password for "Mail"
3. Copy 16-character password
4. Paste in `.env` as `EMAIL_PASS`

### ✅ STEP 4: Set Up MongoDB
- **Local:** Make sure MongoDB is running
- **Cloud (Atlas):** Get connection string and update `MONGO_URI`

### ✅ STEP 5: Move Old Receipts
Move all PDFs from `receipts/` folder to `public/receipts/` folder

### ✅ STEP 6: Start Server
```bash
npm start
```

### ✅ STEP 7: Test
- Visit: http://localhost:5000/health
- Should show: `{"status":"healthy"}`

---

**That's it! Your backend is ready! 🎉**

For detailed instructions, see `STEP_BY_STEP_GUIDE.md`

