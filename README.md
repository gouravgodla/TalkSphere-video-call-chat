# 💬 TalkSphere: Real-time Language Exchange & Communication Platform

Welcome to **TalkSphere**, a feature-rich platform designed to facilitate real-time messaging, video calls, and language exchange in a secure and customizable environment.

## ✨ Highlights & Features

TalkSphere is packed with modern functionalities to provide a seamless communication experience:

### 🌐 Core Communication
* **Real-time Messaging** with **Typing Indicators & Reactions**.
* **1-on-1 and Group Video Calls** with **Screen Sharing & Recording**.
* **Scalable Architecture:** Built with high-performance, **Scalable Technologies like Stream**.

### 🔐 Security & Customization
* **JWT Authentication & Protected Routes** for maximum security.
* **Language Exchange Platform** supporting vast communication.
* **32 Unique UI Themes** for extensive customization.

### 🛠️ Technology & Deployment
* **Tech Stack:** **React + Express + MongoDB + TailwindCSS + TanStack Query**.
* **Global State Management** with **Zustand**.
* **Error Handling** (Frontend & Backend) is robust.
* **Free Deployment** ready.
* **And much more!**

---

## 🚀 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React** (Vite) | The main library for building the user interface. |
| **Styling** | **TailwindCSS** | A utility-first CSS framework for rapid UI development. |
| **State/Data** | **Zustand, TanStack Query** | Efficient global state management and server-state handling. |
| **Backend** | **Express.js** | The fast, unopinioated, minimalist web framework for Node.js. |
| **Database** | **MongoDB** | A flexible NoSQL document database. |
| **Auth** | **JWT (JSON Web Tokens)** | Used for secure, protected routes and user authentication. |
| **Real-time** | **Stream** | Powers the robust real-time messaging and video features. |

---

## 🔧 Setup and Installation

Follow these steps to get TalkSphere up and running on your local machine.

## 🧪 .env Setup

### Backend (`/backend`)

```
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend (`/frontend`)

```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

