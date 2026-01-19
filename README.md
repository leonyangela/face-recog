# Simple Face Recognition Web App

Welcome to the Face Recognition Web App – a modern, AI-powered web application built with [**React Vite**](https://vite.dev/guide/). This project integrates [**Clarifai AI**](https://www.clarifai.com/) for face recognition, uses [**Appwrite**](https://appwrite.io/) as a secure backend bridge, leverages [**Firebase**](https://firebase.google.com/docs/auth) for authentication and session management, and styles the UI beautifully with [**Tailwind CSS**](https://tailwindcss.com/docs/editor-setup). This app showcases how to seamlessly integrate AI-driven features into a scalable and secure web stack.



## 🚀 Tech Stack
- **React** – Frontend
- **Clarifai AI** – Face recognition
- **Appwrite** – Backend bridge for Clarifai
- **Firebase** – Auth, sessions, database
- **Tailwind CSS** – Styling
  

## 📦 Setup & Installation

### 1. Clone the project
```
git clone https://github.com/your-username/face-recognition-app.git
cd face-recognition-app
```

### 2. Install dependencies
```
npm install
```

### 3. Environment Variables
Create a `.env` file in the root folder and add your API keys:

⚠️ **Do not commit your `.env` file**
```
VITE_CLARIFAI_API_KEY=your_clarifai_api_key

VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id

VITE_LOCAL_ENDPOINT=your_localhost_endpoint

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

> **Note:** Calling Clarifai directly from localhost may cause CORS errors due to Clarifai’s security policy. To avoid this, you should create a proxy server or backend to handle requests securely.Read more about Clarifai’s CORS and authentication policies [here](https://docs.clarifai.com/control/authentication/authorize/).


### ▶️ Run the App
```
npm start
```

## 🌐 Open in your browser:

[http://localhost:5173](http://localhost:5173)

## 🧠 How It Works

1. User Authentication – Users log in via Firebase to manage sessions and data.
2. Image Upload – Users upload an image through the React frontend.
3. Secure API Call – The frontend sends the request to Appwrite, which securely communicates with Clarifai AI.
4. Face Detection – Clarifai analyzes the image and returns face detection data.
5. Display Results – React renders the results in the user interface.


## Screenshots

<img width="2938" height="1830" alt="image" src="https://github.com/user-attachments/assets/c632b2c2-0a3c-493e-9957-b1c249b48a7c" />
