## **🎟️ Round-Robin Coupon Distribution**  

A **MERN stack** web app that distributes coupons **sequentially** while preventing abuse. No login is required, and users receive clear feedback on their claims.  

---

### **✨ Features**  

✅ **Round-Robin Distribution** – Coupons are assigned one by one.  
✅ **Guest Access** – No login required.  
✅ **Abuse Prevention:**  
   - 🌐 **IP Tracking** – Blocks multiple claims from the same IP for 1 hour.  
   - 🍪 **Cookie Tracking** – Prevents multiple claims from the same browser.  
   - 📢 **User Feedback** – Displays messages for success, errors, or cooldown time.  
✅ **Live Deployment** – Hosted on **Render (backend)** & **Vercel (frontend)**.  

---

### **🛠️ Tech Stack**  

| **Technology**  | **Usage**  |
|---------------|-----------|
| **Frontend**  | React.js  |
| **Backend**   | Node.js, Express.js  |
| **Database**  | MongoDB  |
| **Hosting**   | Render (Backend), Vercel (Frontend) |

---

## **🚀 Getting Started**  

### **Prerequisites**  
Make sure you have:  
- **[Node.js](https://nodejs.org/)** (v16+)  
- **[MongoDB](https://www.mongodb.com/)** (local or MongoDB Atlas)  
- **Git** installed  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/moni-sm/coupon-distributor.git
cd coupon-distributor
```

### **2️⃣ Set Up the Backend**  
```sh
cd backend
npm install
```
Create a `.env` file in `backend` and add:  
```sh
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/couponDB?retryWrites=true&w=majority
```

### **3️⃣ Set Up the Frontend**  
```sh
cd ../frontend
npm install
```
Create a `.env` file in `frontend` and add:  
```sh
REACT_APP_API_BASE_URL=http://localhost:5000
```

---

## **🚀 Running the Project**  

### **Start the Backend**  
```sh
cd backend
npm start
```
### **Start the Frontend**  
```sh
cd frontend
npm start
```
### **Access the App**  
🔗 Open [http://localhost:3000](http://localhost:3000) ](https://robin-coupon-distributor-8jzq.vercel.app/) 

---

## **📡 API Endpoints**  

| **Endpoint** | **Method** | **Description** |
|-------------|-----------|----------------|
| `/api/coupons/claim` | `GET` | Claim the next available coupon. |
| `/api/coupons/reset` | `POST` | Reset all coupons (for testing). |
| `/api/coupons/status` | `GET` | Get the status of all coupons. |

---

## **🛡️ Abuse Prevention**  

🔹 **IP Tracking** – Blocks repeated claims from the same IP for **1 hour**.  
🔹 **Cookie Tracking** – Prevents multiple claims from the same browser.  

---

## **📧 Contact**  

📩 **monikasm2019@gmail.com**  
