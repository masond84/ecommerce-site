
# ShopHub E-Commerce Platform

ShopHub is a full-stack e-commerce platform with user authentication, product management, and a responsive design. This guide will help you set up the project on your local machine.

**Features**

Frontend: Built with React, Zustand, TailwindCSS, and React Router.

Backend: Powered by Node.js, Express, and MongoDB with Mongoose.

Authentication: User registration, login, and token-based 
authentication.

Database: MongoDB for storing user and product data.
## Installation

Clone the Repository

```bash
git clone https://github.com/masond84/ecommerce-site.git
cd ecommerce-site
```

Setup Backend
```bash
cd server
npm install
```
- Create the .env file in the server directory
```bash
MONGO_URI=your-mongo-db-uri
JWT_SECRET=your-secret-key
PORT=5000
```
- Start the backend server
```bash
node app.js
```

Setup frontend
```bash
cd src
npm install
npm run dev
```



## Directory Structure
**Backend(server)**
```bash
server/
├── controllers/          # Business logic for routes
├── models/               # Mongoose schemas
├── routes/               # API endpoints
├── utils/                # Helper functions (e.g., token generation)
├── .env                  # Environment variables
├── app.js                # Express server entry point
└── package.json          # Backend dependencies
```

**Frontend(src)**
```bash
src/
├── components/           # Reusable UI components
├── pages/                # Page-level components (e.g., Home, Profile)
├── store/                # Zustand stores for state management
├── services/             # API service functions
├── App.tsx               # Main application entry
└── package.json          # Frontend dependencies
```