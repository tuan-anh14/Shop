
# 🛍️ ShopHub – Full-Stack E-Commerce Platform  

[![React](https://img.shields.io/badge/Frontend-React%20(TypeScript)-61DAFB?logo=react)](https://react.dev)
[![Backend](https://img.shields.io/badge/Backend-Node.js%20%26%20Express-339933?logo=node.js)](https://nodejs.org)
[![Database](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)](https://www.mongodb.com)
[![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://shophub-eccomerce.vercel.app/)

> A modern, scalable, and feature-rich e-commerce platform for buyers and sellers built with React (TypeScript), Node.js, Express, MongoDB, and ShadCN UI.  

---


## 🧠 Overview  

**ShopHub** enables buyers and sellers to interact seamlessly on a secure, scalable platform.  
The project is divided into two main parts the **client** (frontend) and the **server** (backend), both connected through RESTful APIs and a shared MongoDB database.  

---

## 🌐 Live Demo  
🔗 **[ShopHub Live Website](https://shophub-eccomerce.vercel.app/)**  

---

## 🚀 Key Features  

### 👤 Buyer Features  
- Browse and search products by category, price, or popularity  
- Add products to cart and wishlist  
- Secure checkout with order tracking  
- Integrated payment gateway (Stripe/PayPal)  
- Review and rate purchased items  
- Real-time chat with sellers  
- Responsive dark mode interface  

### 🏪 Seller Features  
- Seller account registration and verification  
- Manage products (create, update, delete)  
- Access a detailed sales dashboard  
- Track orders and fulfillment  
- Chat directly with buyers  
- View analytics and manage promotions  

### ⚙️ Admin Features *(if implemented)*  
- Manage users, sellers, and products  
- Approve new sellers  
- Monitor platform transactions  
- Access reports and system logs  

---

## 🧠 Tech Stack  

| Layer | Technology |
|-------|-------------|
| **Frontend** | React (TypeScript), Vite, ShadCN UI, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | JWT-based Auth + Role-Based Access Control (RBAC) |
| **Payment Integration** | Stripe / PayPal |
| **State Management** | Context API / Redux Toolkit |
| **Image Uploads** | Cloudinary |
| **Email Notifications** | Nodemailer |
| **Deployment** | Vercel (Frontend), Render / Railway (Backend), MongoDB Atlas |

---

## 🧩 Project Structure  

ShopHub/



├── Frontend/               
│  ├── index.html           
│  ├── package.json        
│  ├── vite.config.ts        
│  ├── README.md      
│  ├── public/             
│  └── src/                
│     ├── App.tsx        
│     ├── main.tsx        
│     ├── index.css          
│     ├── components/       
│     │  └── pages/         
│     ├── lib/             
│     └── styles/           
├── Backend/               
│  ├── index.js            
│  ├── package.json      
│  ├── .env.example         
│  ├── models/            
│  ├── controllers/       
│  ├── routes/               
│  ├── config/              
│  └── middleware/             
└── README.md               


---

## 🧩 Explanation  

### **client/**
Handles everything related to the user interface. Built with React, TypeScript, TailwindCSS, and ShadCN.  
It includes reusable UI components, page views, and global state management through context or Redux.  

### **server/**
Manages all backend operations — authentication, database interactions, and API routes.  
Built using Node.js, Express, and MongoDB with Mongoose ODM.  

### **.env.example**
Template for environment variables required to run the app. Copy this file to `.env` and fill in your own credentials.  

### **README.md**
Contains project overview, setup instructions, and documentation.  

### **package.json (root)**
Defines project-level scripts and dependencies for managing both client and server together (optional).  

---

## ⚙️ Typical Development Workflow  

1. **Frontend:**  
   - Navigate to `/client`  
   - Run `npm run dev` to start the React development server  

2. **Backend:**  
   - Navigate to `/server`  
   - Run `npm run dev` to start the Express server  

3. **Environment Setup:**  
   - Create a `.env` file in `/server` using the `.env.example` template  
   - Add your database connection string, JWT secret, Stripe key, etc.  

4. **Access App:**  
   - Open frontend in browser → `http://localhost:8080`  
   - Backend runs on → `http://localhost:5000`  

---

## 📦 Notes  

- Frontend and backend are independent but communicate through REST APIs.  
- MongoDB Atlas is used as the main database.  
- Environment variables control configuration and secrets.  
- The code is modular and scalable, suitable for enterprise-level e-commerce solutions.  

---


---

## ⚙️ Installation  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/yourusername/shophub.git
cd shophub
```
### 2️⃣ Install dependencies

Frontend
```bash
cd frontend
npm install
```

Backend
```bash
cd Backend
npm install
```

### 3️⃣ Environment configuration
Create a .env file in the backend/ directory with the following:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_URL=your_cloudinary_url
PORT=5000
```

### 4️⃣ Run the app locally
both frontend and backend
```bash
npm run dev
```


**App runs on:**

👉 Frontend: http://localhost:3000

👉 Backend: http://localhost:5000

### 💳 Payment Flow

**1️⃣ Buyer adds items to cart**

**2️⃣ Checkout initializes a Stripe/PayPal payment session**

**3️⃣ Backend verifies transaction and updates order status**

**5️⃣ Confirmation email sent after successful payment**

### 🔐 Security Highlights

**1️⃣ JWT-based authentication**

**2️⃣ Role-based access control (RBAC)**

**3️⃣ Input validation and sanitization**

**4️⃣ Secure HTTP headers and CORS configuration**

**5️⃣ Centralized error handling middleware**

### 📈 Future Enhancements

**1️⃣ AI-powered product recommendation system**

**2️⃣ Multi-language and multi-currency support**

**3️⃣ Seller verification system**

**4️⃣ Mobile app (React Native)**

**5️⃣ Advanced analytics dashboard**

# 🤝 Contributing

Contributions are welcome and appreciated!

To contribute:
```bash

Fork the repo

Create your feature branch (git checkout -b feature-name)

Commit changes (git commit -m "Add new feature")

Push to branch (git push origin feature-name)

Submit a pull request
```

# 🧑‍💻 Developed By

## Metasebiyaw Asfaw
### Software Engineer | Full-Stack Developer 
📧 [metasebiyawasfaw@gmail.com](metasebiyawasfaw@gmail.com)
🌐 [Portifolio](https://metasebiyawasfaw.vercel.app/)

## 🪪 License

This project is licensed under the *MIT* License see the LICENSE
 file for details.

 ⭐ If you found this project useful, please give it a star it helps others discover it!