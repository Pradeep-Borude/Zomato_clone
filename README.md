# foodView


🎯 Project Overview
>A full-stack food ordering and management platform supporting **Users** and **Food Partners** with secure authentication, product management, image handling, and a smooth frontend experience.                    
 It features dual authentication systems for Customers and Food Partners, complete CRUD operations for food inventory, secure JWT-based authentication, cloud image management with ImageKit, and responsive UI for seamless user experiences.
---


# ✨ Key Features
## 👥 Dual Authentication System
- 🔐 **Two-Role Authentication** — Separate login + register for Users & Food Partners  
- ✅ Protected Routes (Role-based access)
- ✅ Secure Cookie-based Authentication

## 🍽️ Food Management (Food Partners)
- 🍔 **Full CRUD for Food Items** — Only the owner (Partner) can add/update/delete  
- 🖼️ **ImageKit Integration** — Upload, replace, and delete food images in the cloud
- 🧾 **Dashboard for Food Partners** — Manage personal inventory + active item count  
- ✅ Inventory Status (Active/Inactive)
- ✅ Real-time Item Analytics

## 🛒 Customer Features
- 👤 **Profile Page for Users** — View personal information  
- 🛒 **Cart System** — Users can add or remove items with authentication  (User-specific)
- ✅ Browse All Food Partners & Items
- ✅ View Cart with User Validation

## 🔒 Security & Performance
- 🪪 JWT Authentication with HttpOnly Cookies
- 🍃 MongoDB with Optimized Schemas
- ✅ Role-based Route Protection
- ✅ ImageKit CDN for Fast Loading
- ✅ Sequential API Validation (No 401 spam)
- 🤩 Responsive Design (Mobile-First)
- 🌐 **Frontend Pages** — Clean UI for login, register, items, dashboard, update forms, etc.  
- 🍱 **Home Page** — Displays all food items from all partners  

---

## 🛠️ Tech Stack

- **Frontend**: React JS | Axios | React Router 
- **Backend**: Node.js | Express.js 
- **Auth**: JWT | HttpOnly Cookies | bcryptjs
- **Storage**: ImageKit (Cloud Image Management)
- **Database**: MongoDB (User/FoodPartner/Food/Cart Models)

---

# 📱 Screenshots

| Home - Food Discovery | Food Partner Dashboard | User Cart Management |
|-----------------------|------------------------|----------------------|
| <img src="https://github.com/user-attachments/assets/1d180789-a8cc-42fb-bfca-ef4e09d42b07" width="300"/> | <img src="https://github.com/user-attachments/assets/def76f94-acfc-4c67-9197-35998255e1b9" width="300"/> | <img width="477" height="406" alt="image" src="https://github.com/user-attachments/assets/c4a9be3f-c03e-44fb-851e-53dfcda36286" /> |

| Update Food Form |  User Profile | Mobile Responsive |
|-----------------------|------------------------|-----|
| <img width="478" height="477" alt="image" src="https://github.com/user-attachments/assets/8c300cdc-9c64-4985-a77f-8fd049bc18a3" /> | <img src="https://github.com/user-attachments/assets/23fcae1d-e821-4bf6-bd3e-b5bf43d30ce9" width="300"/>| <img width="216" height="469" alt="image" src="https://github.com/user-attachments/assets/d3fbfab8-b1a1-43fe-a2c2-0ae68e7f8eb5" />

---

# 🚀 Quick Start

## Prerequisites

```
Node.js 18+ | MongoDB Atlas | ImageKit Account

```
## 1.Clone & Install Backend
```
git clone https://github.com/Pradeep-Borude/foodView.git
cd foodView/backend
cp .env.example .env
npm install
npm run dev
```

## 2.Clone & install Frontend
```
cd ../frontend
cp .env.example .env
npm install
npm start
```
## 3. Environment Variables
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
```
---

# 🗄️ Project Structure
```
foodView/
├── backend/
│   ├── src/
│   │   ├── models/        # User, FoodPartner, Food, Cart
│   │   ├── middleware/    # Auth guards, validation 
│   │   ├── controllers/   # Sequential auth check              
│   │   ├── db/            # database connection
│   │   ├── routes/        # Auth, Food CRUD APIs
│   │   ├── services/      # cloud service(imageKit)   
│   │   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/   # navbar
│   │   ├── pages/        # User/FoodPartner pages
│   │   ├── routes/       # app Routes
│   │   ├── middleware/   # Protected routes
│   │   ├── styles        # css styles
│   │   ├── App.jsx
│   │   ├── main.jsx
│   └── public/
└── .gitignore
```

## 🔐 Authentication & Sessions
- Separate authentication for Users & Food Partners  
- JWT stored securely using **HTTP-Only cookies**  
- Middleware-based role protection  
- Item ownership validation for updates & deletes  

## 🗂️ MongoDB Models
- User  
- Food Partner  
- Food Item  
- Cart  
- Order (for future workflow)

---

## 🔗 API EndPoints

### 👤  User Auth
```
POST /api/auth/user/register
POST /api/auth/user/login
GET  /api/auth/user/me
```
### 🧑‍🍳 Food Partner Auth  
```
POST /api/auth/food-partner/register
POST /api/auth/food-partner/login
GET  /api/auth/food-partner/me
```

### 🍔 Food Management (Protected)
```
GET   /api/food/all
POST  /api/food/create
PUT   /api/food/:id/update
DELETE /api/food/:id/delete
```

### 🛒 Cart (User Protected)
```
GET  /api/cart/me
POST /api/cart/add
DELETE /api/cart/remove/:id
```



## 🎯 Challenges Solved
- Dual Authentication: Separate user/food-partner auth with role-based routing

- 401 Console Errors: Implemented sequential API validation (no parallel calls)

- Image Management: ImageKit integration for upload/delete/update

- Protected Routes: Role-based access control with proper loading states

- Cart Persistence: User-specific cart with MongoDB integration

## 📈 Performance Optimizations
- Sequential auth checks (50% fewer API calls)

- ImageKit CDN for lightning-fast image loading

- Optimized MongoDB queries with population

- Lazy loading for dashboard analytics

- Debounced cart updates

## 🤝 Contributing
- Fork the repository

- Create feature branch (git checkout -b feature/AmazingFeature)

- Commit changes (git commit -m 'Add some AmazingFeature')

- Push to branch (git push origin feature/AmazingFeature)

- Open Pull Request

---

## 👨‍💻 Author
Pradeep .S. Borude
[LinkedIn](https://www.linkedin.com/in/pradeep-borude-7854422b3/) | [Portfolio](https://pradeepsportfolio.vercel.app/) | pradeepborude406@gmail.com
<p align="right"><i><sub>Last Updated: 2025</sub></i></p>



