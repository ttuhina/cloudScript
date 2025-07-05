# 🌙 CloudScript — Dream Journal App

**CloudScript** is a beginner-friendly full-stack web app for recording, storing, and reflecting on your dreams. Built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**, it allows users to perform all basic CRUD operations (Create, Read, Update, Delete) with a simple and calming frontend.

---

## ✨ Features

- 📝 Add a dream with title, description, and mood  
- 📖 View all logged dreams in a reverse-chronological timeline  
- 🗑️ Delete dreams   
- ☁️ Aesthetic, calming frontend  
- 🔗 Fully connected to a live MongoDB Atlas database

---

## 🖼️ Screenshots

<p float="left">
  <img src="https://github.com/ttuhina/cloudScript/blob/main/screenshots/sc1.png" width="48%" />
  <img src="https://github.com/ttuhina/cloudScript/blob/main/screenshots/sc2.png" width="48%" />
</p>

---

## 🧰 Tech Stack

| Layer     | Tech                     |
|-----------|--------------------------|
| Backend   | Node.js, Express         |
| Database  | MongoDB Atlas (cloud)    |
| ORM       | Mongoose (MongoDB ODM)   |
| Frontend  | HTML, CSS, JavaScript    |
| Env Mgmt  | dotenv                   |

---

## 🚀 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/ttuhina/cloudScript.git
cd cloudScript
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up `.env` file

Create a `.env` file in the root with this content:

```env
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/cloudscript?retryWrites=true&w=majority
```

> Replace `<your-username>` and `<your-password>` with your actual MongoDB Atlas credentials.

### 4. Start the server

```bash
node server.js
```

Visit:  
**http://localhost:3000**

---

## 📁 Folder Structure

```
cloudScript/
├── models/         # Mongoose schema
├── routes/         # API routes
├── public/         # Frontend files
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .env            # Environment variables (not committed)
├── server.js       # Main server file
```

---

## 📦 API Overview

- `GET /api/dreams` – fetch all dreams  
- `POST /api/dreams` – add a new dream  
- `PUT /api/dreams/:id` – update a dream (optional)  
- `DELETE /api/dreams/:id` – delete a dream

---

## 🧑‍💻 Author

Made with love by [@ttuhina](https://github.com/ttuhina) ☁️
