# Node.js Chat App 💬

A real-time chat application built with  **React** (frontend).  
Users can join, chat with others instantly, and log out securely.

---

## 🚀 Features
- 🔐 User registration & login
- 💬 Real-time messaging with Socket.IO
- 👥 Multiple users chatting at once
- 🎨 Tailwind CSS-based chat UI
- 🚪 Logout functionality
- 📱 Responsive design (works on desktop & mobile)

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express, Socket.IO  
- **Frontend:** React, Tailwind CSS  
- **Database:** MongoDB (or any supported DB)  
- **Authentication:** JWT (JSON Web Token)  

---

## 📂 Project Structure
├── .gitignore
├── LICENSE
├── README.md
├── app.js
├── bin
    └── www
├── model
    ├── message.model.js
    └── user.model.js
├── package-lock.json
├── package.json
├── public
    └── stylesheets
    │   └── style.css
├── routes
    ├── index.js
    └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug