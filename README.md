# 🛒 E-Commerce Store App

This is a responsive and modern E-Commerce web application built using **React.js** and **Tailwind CSS**. It allows users to browse products, add items to the cart, and proceed through a checkout and payment flow. Authentication and backend functionality are powered by **Appwrite**.

---

## 🚀 Features Implemented

- 🖥️ Responsive design for mobile & desktop
- 👤 User Authentication (Signup / Login / Logout)
- 🛍️ Product Listing with dynamic cards
- ➕ Add to Cart functionality
- 🧾 Cart page with quantity and total
- 📦 Checkout page
- 💳 Payment options page with UPI, Credit Card, Debit Card, and COD (UI)
- 🔐 Protected routes for authenticated users
- 🖼️ Empty cart illustration and redirect to continue shopping

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Appwrite (Authentication, Database, Storage)
- **Others**: Git, GitHub

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

   ---
   
2. Install dependencies
   ```bash
   npm install

   ---

 3. Run the development server:
     ```bash
    npm run dev


    ---
   

 4. Create a .env file in the root with the following environment variables:
    VITE_APPWRITE_ENDPOINT=your-endpoint
    VITE_APPWRITE_PROJECT_ID=your-project-id
    VITE_APPWRITE_DATABASE_ID=your-db-id
    VITE_APPWRITE_COLLECTION_ID=your-collection-id
    VITE_APPWRITE_BUCKET_ID=your-bucket-id
   
  
    ---

   

📌 Project Structure
   src/
   ├── components/         # Reusable UI components
   ├── pages/              # Main screens (Home, Cart, Checkout, etc.)
   ├── appwrite/           # Appwrite config and service logic
   ├── App.jsx             # Root component
   ├── main.jsx            # Entry point
   public/
   ├── favicon, etc.
   .env                    # Appwrite environment variables
   

    ---


🧩 To-Do / In Progress

 -> Add real payment gateway integration (currently UI only)

 -> Complete product upload/admin interface

 -> Add order history for users

 -> Improve error handling and form validations

 -> Add user profile page (with editable info)

 -> Polish UI and animations

    ---


  📄 License
  MIT

  
