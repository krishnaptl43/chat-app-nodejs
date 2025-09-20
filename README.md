# Node.js Chat App 💬

A real-time chat application built with **Node.js**, **Express**, **Socket.IO**, and **React** (frontend).  
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
├── backend/ # Node.js + Express server
│ ├── server.js # App entry point
│ ├── socket.js # Socket.IO logic
│ └── models/ # Database models (users, messages)
│
├── frontend/ # React app (Vite/CRA)
│ ├── src/
│ │ ├── components/ # Chat UI components
│ │ ├── pages/ # Login, Register, Chat pages
│ │ └── App.jsx
│
├── .gitignore
├── package.json
└── README.md